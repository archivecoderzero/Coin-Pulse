import React from "react";

function SignupCard({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 200, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    {/* get the sign up page render here */}
    </div>
  );
}

export default SignupCard;
