import React, { Component } from "react";
import logo from "./logo.png";
import "./Image/Alex.png";
import "./Image/Raphael.png";
import "./Image/Zia.png";
import "./style.css";

import { Col, Row, Container } from "../components/Grid";
import "./index.css";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container fluid>
        {/* MAIN CARD START -----------------------> */}
        <Row>
          <div className="block" id="main">
            <img className="Logo" src={logo} alt="logo" />;
          </div>
        </Row>
        {/* MAIN CARD END -----------------------> */}

        {/* ABOUT CARD START -----------------------> */}
        <Row>
          <div className="block" id="about">
            <Container>
              <Row>
                <Col size="6">
                  <p className="aboutTitle">Satoshi-Pulse</p>
                  <h4>
                    The main use for this application is to tract the sentiment
                    of the market based on current trending news . Trend
                    analysis application is one of the best tool beginner
                    traders are looking for , although sentiment analysis tools
                    are available , it is quite expensive and complicated for
                    beginners and hobbyist . This application will solve the
                    complexity of sentiment analysis by making it as simple as
                    having 3 inputs and a click of a button .
                  </h4>
                </Col>
                <Col size="6">
                  <img></img>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        {/* ABOUT CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <div className="block" id="team">
            <h1>Meet the Team </h1>
            <Row>
              <Col size="4">
                <div>
                  <img className="dev" src={require("./Image/Raphael.png")} />
                </div>
                <h4 style={{ color: "palevioletred" }}>Raphael</h4>
                <h6 style={{ color: "pink" }}>Full Stack Web Developer</h6>
              </Col>
              <Col size="4">
                <div>
                  <img className="dev" src={require("./Image/Zia.png")} />
                </div>
                <h4 style={{ color: "palevioletred" }}>Zia</h4>
                <h6 style={{ color: "pink" }}>Full Stack Web Developer</h6>
              </Col>
              <Col size="4">
                <div>
                  <img className="dev" src={require("./Image/Alex.png")} />
                </div>
                <h4 style={{ color: "palevioletred" }}>Alex</h4>
                <h6 style={{ color: "pink" }}>Full Stack Web Developer</h6>
              </Col>
            </Row>
          </div>
        </Row>
        {/* DEVS CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <div className="block" id="policy">
            <Container>
              <p id="policyTitle">Corporate Policy</p>
              <p id="policyText">
                We are committed to complying with all U.S. regulations that
                help prevent, detect and remediate unlawful behavior by
                customers and virtual currency developers when using the
                Satoshi-Pulse trading platform or any of the company’s other
                services. Satoshi-Pulse is not a regulated exchange under U.S.
                securities laws.
              </p>
            </Container>
          </div>
        </Row>
        <Row>
          <div className="block" id="signup">
            <Container>
              <div class="formGroup">
                <label for="input" style={{ color: "white" }}>
                  Sign Up
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputUsername"
                  aria-describedby="userName"
                  placeholder="User Name"
                />
              </div>
              <br />
              <div class="formGroup">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <br />
              <button type="submit" id="submitBtn" class="btn btn-primary">
                Submit
              </button>
              <hr/>
              <small id="userHelp" class="form-text text-muted">As a verified user of this site you will be able to trade in markets offered by Satoshi-Pulse</small>
            </Container>
          </div>
        </Row>
        {/* DEVS CARD START -----------------------> */}
      </Container>
    );
  }
}

export default Index;
