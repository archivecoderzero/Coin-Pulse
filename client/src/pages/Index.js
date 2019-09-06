import React, { Component } from "react";
import logo from "./logo.png";

// INDEX COMPONENT ----> START
import MainCard from "../components/IndexComponents/MainCard";
import AboutCard from "../components/IndexComponents/AboutCard";
import DevsCard from "../components/IndexComponents/DevsCard";
import SignupCard from "../components/IndexComponents/SignupCard";
// INDEX COMPONENT ----> END

import { Col, Row, Container } from "../components/Grid";
import './style.css';
import Signup from './Signup';


class Index extends Component {

  componentDidMount() {
    
  }  
  
  render() {
    return (


      <Container fluid>
        <br></br>
        <br></br>
        <br></br>
        {/* MAIN CARD START -----------------------> */}
        <Row>
        <br></br>
          <Col size="md-12">
            <MainCard>
            <img className="Logo" src={logo} alt="logo" />;
            </MainCard>
          </Col>
          <br></br>
        </Row>
        {/* MAIN CARD END -----------------------> */}


        {/* ABOUT CARD START -----------------------> */}
        <Row>
          <Col size="md-12">
            <AboutCard>
              <h2 style={{color: "white"}}>ABOUT</h2>
            </AboutCard>
          </Col>
          <br></br>
        </Row>
        {/* ABOUT CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <Col size="md-12">
            <DevsCard>
              <h1 style={{color: "white"}}>Meet the Team </h1>
            </DevsCard>
          </Col>
          <br></br>
        </Row>
        {/* DEVS CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
          <Row>
          <Col size="md-12">
            <SignupCard>
              <h1 style={{color: "white"}}>Sign-up </h1>
              <Signup />
            </SignupCard>
          </Col>
          <br></br>
        </Row>
        {/* DEVS CARD START -----------------------> */}

      </Container>
    )
}}

export default Index;
