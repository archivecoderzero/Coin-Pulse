import React from "react";
import SearchForm from "./parts/SearchForm.jsx";

function Hero(props){
  return(
      <div className="hero container-fluid">
        <div className="row">
          <div className="content col-sm-12">            
            <SearchForm emit={ props.emit } initTimestamp={ props.initTimestamp } />
          </div>
        </div>
      </div>
    );
}
export default Hero;

