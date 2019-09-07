var React = require('react');
var TweetList = require('./TweetList.jsx');
var createReactClass = require('create-react-class');

//TwitterStream Displays A List of All Twitter Messages as Cards
//Uses TweetList.jsx
var TwitterStream = createReactClass({
  render: function() {
    //Pass collectedTweets to TweetList
    return (
      <div className="stream col-sm-12">
        <h1>Tweet List</h1>
        <TweetList collectedTweets={this.props.collectedTweets} />
      </div>
    );
  }
});
  

module.exports = TwitterStream;