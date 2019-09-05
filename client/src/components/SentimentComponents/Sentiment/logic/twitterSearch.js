//includes
  twitter = require('twitter'),
  sentimentAnalysis = require('./sentimentAnalysis'),
  db = require('diskdb');
  db = db.connect('db', ['sentiments']);

//config
var config = {
  consumer_key: 'y34F9u0JyH8umktmdIWKrMpkZ',
  consumer_secret: 'ZKe9o8CC78YLoZSzm5KtX3tHilEUCH5FalNgKXNLMW8M5Rap3l',
  access_token_key: '1128449170967105536-2AwK3ngyConPBE3moM3lSaFS7EVSxP',
  access_token_secret: 'jxkDEwO0gUa8z5PO3gaUfQZv4UZSJKLqtJZ3BxCT4vkWf'
}

module.exports = function(text, callback) {
  var twitterClient = new twitter(config);
  var response = [], dbData = []; // to store the tweets and sentiment
  twitterClient.search(text, function(data) {
    for (var i = 0; i < data.statuses.length; i++) {
      var resp = {};
      resp.tweet = data.statuses[i];
      resp.sentiment = sentimentAnalysis(data.statuses[i].text);
      dbData.push({
        "tweet" : resp.tweet.text,
        "score" : resp.sentiment.score
      });
      response.push(resp);
    };
    db.sentiments.save(dbData);
    callback(response);
  });
}
