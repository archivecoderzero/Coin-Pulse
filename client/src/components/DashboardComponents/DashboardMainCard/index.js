import React from "react";

function DashboardMainCard({ children }) {
  return (
    <div
      style={{ height: 700,  paddingTop: 120, marginTop:60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      
    </div>
  );
}

export default DashboardMainCard;
