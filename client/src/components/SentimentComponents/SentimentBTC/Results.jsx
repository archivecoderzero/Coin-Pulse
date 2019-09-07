import React from "react";
import Dashboard from "./parts/Dashboard.jsx";
import TwitterStream from "./parts/TwitterStream.jsx";
import ContentJtron from "../../ContentJtron";
import { ContainerChart, Col, Row } from "../../Grid";



//Results Holds the Dashboard and TwitterStream Components
//Uses Dashboard.jsx and TwitterStream.jsx
function Results(props){
  return(
      <div className="results container-fluid">
          <Dashboard
            binnedTweets={ props.binnedTweets }
            totalTweets={ props.totalTweets }
            sentiment= { props.sentiment }
          />
        <TwitterStream collectedTweets={ props.collectedTweets } />

      </div>
    );
}

export default Results;
