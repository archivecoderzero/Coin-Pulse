import React from "react";

function DashboardAsideLeft({ children }) {
  return (
    <div
      style={{ height: 500,  paddingTop: 120, marginTop:60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      
    </div>
  );
}

export default DashboardAsideLeft;
