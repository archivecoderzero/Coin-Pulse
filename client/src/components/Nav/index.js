import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import './style.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        //   window.location.replace("/login");
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>
                {/* checks if the user is logged in */}
                {/* displays a different navbar */}
                {loggedIn ? ( 
                    <header className="navbar App-header" id="nav-container"> 
                        <div className="col-3">
                            <section className="navbar-section">
                                <Link to="/dashboard" className="btn btn-link text-secondary">
                                <span className="text-secondary">Dashboard</span></Link>
                            </section>    
                        </div>
                        <div className="col-6">
                            <div id="top-filler"></div>
                            <a className="navbar-brand" href="/">
                            Satoshi-Pulse <i className="fab fa-bitcoin"></i>
                            </a>
                        </div>
                        <div className="col-3" >        
                            <section className="navbar-section">
                                <div to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></div>
                            </section>                        
                        </div>        
                    </header>
                ) : (
                <header className="navbar App-header" id="nav-container"> 
                    <div className="col-3">
                        <section className="navbar-section">
                            <Link to="/" className="btn btn-link text-secondary">
                                <span className="text-secondary">home</span>
                                </Link>
                            <Link to="/login" className="btn btn-link text-secondary">
                            <span className="text-secondary">login</span>
                                </Link>
                            <Link to="/signup" className="btn btn-link">
                            <span className="text-secondary">sign up</span>
                                </Link>
                        </section>
                    </div>
                    <div className="col-6">
                        <div id="top-filler"></div>
                        <a className="navbar-brand" href="/">
                        Satoshi-Pulse <i className="fab fa-bitcoin"></i>
                        </a>
                    </div>
                    <div className="col-3" > 

                    </div>
                </header>
                )}
            </div>
        )
    }
}

export default Navbar