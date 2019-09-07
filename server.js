const express = require('express');
// TWITTER SENTIMENT DEPENDENCIES
var Twitter = require('./Twitter');
var sentiment = require('./NodeSentiment.js');
var twitterStream = Twitter;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const MongoClient = require('mongodb').MongoClient;
const passport = require('./passport');
var cors = require('cors');
const app = express();
//const socketPort = process.env.socketPort || 8080;

const PORT = process.env.PORT || 3001;
// Route requires
const user = require('./routes')


// // ## Routes and Serve Static Files
// app.use(express.static(__dirname + './client/public'));

/* app.get("/", function (req, res) {
	res.json(path.join(__dirname, "client/public/index.html"));
}); */

// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
//  }



// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
// Routes
app.use(user)



//##SocketIO Server --> START
//var server = app.listen(socketPort);
// console.log('Socket IO ON port --> : %s', socketPort);
function startSocket(server) {
	var io = require('socket.io')(server);
	var connections = [];
	//Create socket.io Connection with Client
	//All Socket Listeners Here
	io.sockets.on('connection', function (socket) {
		connections.push(socket);
		console.log('%s Connected. %s sockets connected', socket.id, connections.length);
		var prevSearch = false;
		var twitterStream;
		socket.on('search', function (payload) {
			console.log('Keyword: %s', payload.keyword);
			if (prevSearch) {
				twitterStream.stop();
				console.log(prevSearch);
				console.log('stop stream');
			} else {
				prevSearch = true;
			}
			twitterStream = Twitter.stream('statuses/filter', { language: 'en', track: payload.keyword });
			var lastTimestamp = Date.now(),
				speedLimiter = 800; //800ms
			//Turn on Twitter Stream
			twitterStream.on('tweet', function (tweet) {
				if (tweet.timestamp_ms - lastTimestamp > speedLimiter) {
					lastTimestamp = Date.now();
					// Send Tweet Object to Client
					socket.emit('sendTweet', { tweet: sentiment.getSentiment(tweet, socket) });
				}
			});
			socket.once('disconnect', function () {
				connections.splice(connections.indexOf(socket), 1);
				socket.disconnect();
				twitterStream.stop();
				console.log('Socket disconnected: %s sockets remaining', connections.length);
			});
		});
	}); //END io.sockets.on
	//##SocketIO Server --> END
}




//mongoose.Promise = global.Promise

// your local database url
// 27017 is the default mongoDB port

const uri = 'mongodb://heroku_8zklrb8g:i970h7olhftopcht9ner55j071@ds211708.mlab.com:11708/heroku_8zklrb8g' || process.env.MONGODB_URI;

mongoose.connect(uri).then(
	() => {
		/** ready to use. The `mongoose.connect()` promise resolves to undefined. */
		console.log('Connected to Mongo');
	},
	err => {
		/** handle initial connection error */
		console.log('error connecting to Mongo: ')
		console.log(err);
	}
);


// const uri = "mongodb+srv://alexmongo:PYKuCj@4Cw@2tEt@cluster0-wrwod.mongodb.net/test?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



// Starting Server 
const server = app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

startSocket(server);

module.exports = app;
