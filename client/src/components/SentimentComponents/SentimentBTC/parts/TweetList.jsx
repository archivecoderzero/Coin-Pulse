var React = require('react');
var TweetCard = require('./TweetCard.jsx');
var createReactClass = require('create-react-class');

//TweetList Contains All Twitter Messages as Cards
//Uses TweetCard.jsx
var TweetList = createReactClass({
  render: function() {
    
    var tweetLoop = this.props.collectedTweets.map(function(mappedTweet, index) {
      return (<TweetCard tweet={mappedTweet} key={index} />);
    });

    return (
      <div className="tweet-list">
        {tweetLoop}
      </div>
    )
  }
});

module.exports = TweetList;