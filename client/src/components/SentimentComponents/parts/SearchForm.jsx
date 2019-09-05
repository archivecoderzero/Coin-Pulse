var React = require('react');
var ReactDOM = require('react-dom');

class SearchForm extends React.Component {
  search() {
    var keywordModifier = ReactDOM.findDOMNode(this.refs.keyword).value ;
    var keyword = "#bitcoin " + keywordModifier;
    var initTimestamp = new Date().getTime();
    this.props.emit('search', { keyword: keyword });
    this.props.initTimestamp({ initTimestamp: initTimestamp });
  }
  
  render() {
    return (
      <div id="search-bar">
          <form className="input-group" action="javascript:void(0)" onSubmit={ this.search.bind(this) }>
            <input id="search" ref="keyword" type="search" placeholder="KeyWord Modifier"
                    autoFocus="autofocus" className="form-control" />
            <span className="input-group-btn">
              <button id="submit" className="btn btn-default" type="button" onClick= { this.search.bind(this) }>Run Bitcoin Sentiment</button>
            </span>
          </form>
      </div>
    );
  }  
}

export default SearchForm;
