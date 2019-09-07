import React from "react";

function ContentJtron({ children }) {
  return (
    <div
      style={{ height: 600, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="ContentJtron"
    >
      {children}
    </div>
  );
}

export default ContentJtron;
