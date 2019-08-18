import React from "react";

function Main({ children }) {
  return (
    <div
      style={{ height: 750, clear: "both", paddingTop: 300, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Main;