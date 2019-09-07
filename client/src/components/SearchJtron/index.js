import React from "react";

function SearchJtron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center" , backgroundColor: "rgba(44, 130, 201, 1)" ,opacity: "0.8" }}
      className="SearchJtron"
    >
      {children}
    </div>
  );
}

export default SearchJtron;
