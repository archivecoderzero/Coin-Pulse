const express = require('express');
// TWITTER SENTIMENT DEPENDENCIES
var Twitter = require('./Twitter');
var sentiment = require('./NodeSentiment.js');
var twitterStream = Twitter;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
var cors = require('cors');
const app = express();
const socketPort = process.env.PORT || 8000;

const PORT = process.env.PORT || 8080;
// Route requires
const user = require('./routes')


// ## Routes and Serve Static Files
app.use(express.static(__dirname + './client/public'));

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)
app.use(cors());
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
// Routes
app.use(user)


//##SocketIO Server --> START
var server = app.listen(socketPort);
console.log('Socket IO ON port --> : %s', socketPort);

var io = require('socket.io').listen(server);
var connections = [];
//Create socket.io Connection with Client
//All Socket Listeners Here
io.sockets.on('connection', function(socket) {
	connections.push(socket);
	console.log('%s Connected. %s sockets connected', socket.id, connections.length);
	var prevSearch = false;
	var twitterStream;
	socket.on('search', function(payload) {
	  console.log('Keyword: %s', payload.keyword);
	  if(prevSearch) {
		twitterStream.stop();
		console.log(prevSearch);
		console.log('stop stream');
	  } else {
		prevSearch = true;
	  }
	  twitterStream = Twitter.stream('statuses/filter', {language: 'en', track: payload.keyword});
	  var lastTimestamp = Date.now(),
		  speedLimiter = 800; //800ms
	  //Turn on Twitter Stream
	  twitterStream.on('tweet', function(tweet) {
		if(tweet.timestamp_ms - lastTimestamp > speedLimiter) {
		  lastTimestamp = Date.now();
		  // Send Tweet Object to Client
		  socket.emit('sendTweet', {tweet: sentiment.getSentiment(tweet, socket)});
		}
	  });
	  socket.once('disconnect', function() {
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		twitterStream.stop();
		console.log('Socket disconnected: %s sockets remaining', connections.length);
	  });
	});
  }); //END io.sockets.on
//##SocketIO Server --> END





// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
