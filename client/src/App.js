import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./style.css"


function App() {
  return (
    <Router>
      <div>
        <Nav sticky="top" />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:id" component={Detail} />
          <Route exact path="/algo/:id" component={Detail} />
          <Route exact path="/currency/:id" component={Detail} />
          <Route component={NoMatch}/>
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
