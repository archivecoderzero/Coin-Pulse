import { ContainerChart, Col, Row } from "../../../Grid";
var React = require('react');
var ReactDOM = require('react-dom');

const mainSentinment = {
  padding:2,
  border:3,
  opacity:0.9,
  textAlign: "center"
};

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
      <div style={mainSentinment}id="search-bar">

        <form className="input-group" action="javascript:void(0)" onSubmit={this.search.bind(this)}>
          <Row>
            <h3>Add a keyword modifier</h3>
            <Col size="md-6">
            <input id="search" ref="keyword" type="search" placeholder="Modifier"
              autoFocus="autofocus" className="form-control" />
            <button id="submit" className="btn btn-primary" type="button" onClick={this.search.bind(this)}>Run Bitcoin Sentiment</button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default SearchForm;
