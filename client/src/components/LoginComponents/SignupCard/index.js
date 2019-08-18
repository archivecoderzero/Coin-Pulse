import React from "react";

function SignupCard({children}) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 20,marginTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default SignupCard;
