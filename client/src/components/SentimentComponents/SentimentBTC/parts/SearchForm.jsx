import { ContainerChart, Col, Row } from "../../../Grid";
var React = require('react');
var ReactDOM = require('react-dom');



class SearchForm extends React.Component {
  search() {
    var keywordModifier = ReactDOM.findDOMNode(this.refs.keyword).value;
    var keyword = "#bitcoin " + keywordModifier;
    var initTimestamp = new Date().getTime();
    this.props.emit('search', { keyword: keyword });
    this.props.initTimestamp({ initTimestamp: initTimestamp });
  }
  render() {
    return (
      <div id="search-bar">
        <form className="input-group" action="javascript:void(0)" onSubmit={this.search.bind(this)}>
            <input id="search" ref="keyword" type="search" placeholder="Modifier"
              autoFocus="autofocus" className="form-control" />
            <button id="submit" className="btn btn-primary" type="button" onClick={this.search.bind(this)}>Check BTC Sentiment</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
