import React from "react";

function LoginCard({children}) {
  return (
    <div
      style={{ height: 350, clear: "both", paddingTop: 20,marginTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      
    </div>
  );
}

export default LoginCard;
