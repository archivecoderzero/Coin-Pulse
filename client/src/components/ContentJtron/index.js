import React from "react";

function ContentJtron({ children }) {
  return (
    <div
      style={{ height: 600, clear: "both", paddingTop: 120, textAlign: "center" , backgroundColor: "rgba(44, 130, 201, 1)" ,opacity: "0.8" }}
      className="ContentJtron"
    >
      {children}
    </div>
  );
}

export default ContentJtron;
