import React from "react";

function SignupCard({ children }) {
  return (
    <div
      style={{ height: 750, clear: "both", paddingTop: 300, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default SignupCard;
