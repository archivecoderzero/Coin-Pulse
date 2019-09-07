var React = require('react');
var TwitterActivityChart = require('./TwitterActivityChart.jsx');
var createReactClass = require('create-react-class');


//Dashboard Holds the TwitterActivity Chart Component
//Uses TwitterActivityChart.jsx
var Dashboard = createReactClass({
  render: function() {
    return (
      <div className="dashboard col-sm-12">
        <TwitterActivityChart
          binnedTweets={ this.props.binnedTweets }
          totalTweets={ this.props.totalTweets }
          sentiment= { this.props.sentiment }
        />
      </div>
    );
  }
});

module.exports = Dashboard;