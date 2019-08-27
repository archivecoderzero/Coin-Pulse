import React from "react";
import { relative } from "path";
import './style.css';

function DashboardMainCard({ children }) {
  return (
    <div
      // style={{ height: 650,  paddingTop: 10, marginTop: 0,  textAlign: "center"}}
      className="jumbotron"
    >
      {children}
      
    </div>
  );
}

export default DashboardMainCard;
