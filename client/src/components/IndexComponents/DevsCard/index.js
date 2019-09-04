import React from "react";
// import logo from "./logo";
// import "./style.css";

function DevsCard({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 200, textAlign: "center" }}
      className="jumbotron"
    >
     <div className="team">{children}</div>
      {/* <div className="devSection">  
        <div>
          <div className="raphael"></div>
          <h4>Raphael</h4>
        </div>
        <div>
          <div className="zia"></div>
        <h4>Zia</h4>
        </div>
        <div>
          <div className="alex"></div>
        <h4>Alex</h4>
        </div>
      </div> */}

    </div>
  );
}

export default DevsCard;
