import React from "react";
import "./Image/Alex.png";
import "./Image/Raphael.png";
import "./Image/Zia.png";
import "./style.css";

function DevsCard({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 200, textAlign: "center" }}
      className="jumbotron"
    >
     <div className="team">{children}</div>
      <div className="row" id="container">  
        <div className="col-sm-4">
          <div >
          <img className="dev" src={require('./Image/Raphael.png')} />
          </div>
          <h4 style={{color: "palevioletred"}}>Raphael</h4>
          <h6 style={{color: "pink"}}>Full Stack Web Developer</h6>
        </div>
        <div className="col-sm-4">
          <div>
          <img className="dev" src={require('./Image/Zia.png')} />
          </div>
        <h4 style={{color: "palevioletred"}}>Zia</h4>
        <h6 style={{color: "pink"}}>Full Stack Web Developer</h6>
        </div>
        <div className="col-sm-4">
          <div >
          <img className="dev" src={require('./Image/Alex.png')} />
          </div>
        <h4 style={{color: "palevioletred"}}>Alex</h4>
        <h6 style={{color: "pink"}}>Full Stack Web Developer</h6>
        </div>
      </div>

    </div>
  );
}

export default DevsCard;
