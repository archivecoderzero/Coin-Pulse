var React = require('react');
var d3 = require('d3');
var createReactClass = require('create-react-class');

var Line = createReactClass({
  render: function() {
    return (
      <path d={this.props.path} stroke={ this.props.stroke } strokeWidth="2" fill="none" />
    );
  }
});

module.exports = Line;