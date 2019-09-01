import React, { Component } from "react";

// INDEX COMPONENT ----> START
import MainCard from "../components/IndexComponents/MainCard";
import AboutCard from "../components/IndexComponents/AboutCard";
import DevsCard from "../components/IndexComponents/DevsCard";
import SignupCard from "../components/IndexComponents/SignupCard";
// INDEX COMPONENT ----> END

import { Col, Row, Container } from "../components/Grid";

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
              <h1>MAIN </h1>
            </MainCard>
          </Col>
          <br></br>
        </Row>
        {/* MAIN CARD END -----------------------> */}


        {/* ABOUT CARD START -----------------------> */}
        <Row>
          <Col size="md-12">
            <AboutCard>
              <h1>ABOUT</h1>
            </AboutCard>
          </Col>
          <br></br>
        </Row>
        {/* ABOUT CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <Col size="md-12">
            <DevsCard>
              <h1>DEVS </h1>
            </DevsCard>
          </Col>
          <br></br>
        </Row>
        {/* DEVS CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
          <Row>
          <Col size="md-12">
            <SignupCard>
              <h1>Sign-up </h1>
            </SignupCard>
          </Col>
          <br></br>
        </Row>
        {/* DEVS CARD START -----------------------> */}

      </Container>
    )
}}

export default Index;
