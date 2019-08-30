import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components

import Nav from './components/Nav'
import Footer from "./components/Footer";

// MAIN DASHBOARD
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Algo from "./pages/Algo";
import NoMatch from "./pages/NoMatch";
import Signup from './pages/Signup'
import Login from './pages/Login'
import "./style.css"
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      show: false
    }

    // this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.updateUser = this.updateUser.bind(this)
  }

  // waits for component to mount and exucutes this.getUser()
  componentDidMount = () => {
    this.getUser()
  }

  // sends the userObject thru to set the state in a different componenet
  updateUser = userObject => {
    this.setState(userObject)
    console.log(this.state);
  }

  // checks if this user has an account
  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  

  render() {
    return (
      <Router>
        <div className="App">
          <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/login" render={() =>
              <Login updateUser={this.updateUser} />}
            />
            <Route exact path="/signup" render={() =><Signup/>} />

            <Route exact path="/dashboard" render={ this.state.loggedIn ? 
              (
                () => <Dashboard />
              ) : (
                () => <Login alert={alert} updateUser={this.updateUser} />
              )}
            />

      
            <Route exact path="/algo/btc" render={ this.state.loggedIn ? 
            

            (
              // TERNARY EXPRESSION 
              () => <Algo />
            ) : (
              () => <Algo />
              
              
              // UNCOMMENT WHEN ROUTES FIXED -- > START

              // <Login updateUser={this.updateUser}/>

              // UNCOMMENT WHEN ROUTES FIXED -- > END
            )}
            />

            <Route component={NoMatch}/>
          </Switch>
          <Footer />
        </div> 
    </Router>
    );
  }
}

export default App;
