import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav sticky="top" />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Dashboard} />
          <Route exact path="/signup" component={Dashboard} />
          <Route exact path="/profile/:id" component={Detail} />
          <Route exact path="/algo/:id" component={Detail} />
          <Route exact path="/currency/:id" component={Detail} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
