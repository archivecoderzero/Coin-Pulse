import React from "react";

function Main({ children }) {
  return (
    <div
      style={{ height: 550, clear: "both", paddingTop: 300, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      <h4 style={{color: "white"}}>The main use for this application is to tract the sentiment of the market based on current trending news . Trend analysis application is one of the best tool beginner traders are looking for , although sentiment analysis tools are available , it is quite expensive and complicated for beginners and hobbyist . This application will solve the complexity of sentiment analysis by making it as simple as having 3 inputs and a click of a button .</h4>
      
    </div>
  );
}

export default Main;
