import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import DashboardMainCard from "../components/DashboardComponents/DashboardMainCard"
import DashboardAsideLeft from "../components/DashboardComponents/DashboardAsideLeft"
import DashboardTraders from "../components/DashboardComponents/DashboardTraders"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./dashboard.css";


class Dashboard extends Component {

  state = {

  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div id="bodyDashboard">
      <Container fluid>
        <DashboardMainCard />



        <Row>
          <Col size="md-4">
            <DashboardAsideLeft>
              <h3>Trending Articles</h3>
              <p>Bitcoin Warning As Serious Security Vulnerabilities Uncovered
              <a href="https://www.forbes.com/sites/billybambrough/2019/09/01/bitcoin-warning-as-serious-security-vulnerabilities-uncovered/#4aac38c938f1" onClick={this.handleClick} style={{cursor: 'pointer', backgroundColor: "rgb(0, 51, 99)"}}>Read more!</a>
              </p>
              <p>You don’t need brilliant financial analysis skills to notice that Bitcoin is in a bubble. It has grown in value from about 39 cents to over $18,000 in just eight years and recently attracted broad media attention by doubling in just a few days.
              <a href="https://www.nytimes.com/2017/12/18/opinion/bitcoin-boom-technology-trust.html" onClick={this.handleClick} style={{cursor: 'pointer', backgroundColor: "rgb(0, 51, 99)"}}>Read more!</a>
              </p>
              <p>Money, blockchains, and social scalability
              <a href="http://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html" onClick={this.handleClick} style={{cursor: 'pointer', backgroundColor: "rgb(0, 51, 99)"}}>Read more!</a>
              </p>
              
            </DashboardAsideLeft>
          </Col>

          <Col size="md-4">
            <DashboardTraders>

            </DashboardTraders>
          </Col>
          <Col size="md-4">
            <DashboardAsideLeft>
              <h3>Search</h3>
              <Form>
                <Form.Group controlId="Search">
                  <Form.Label>Search Cryptocurrency</Form.Label>
                  <Form.Control type="text" placeholder="Search"  />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  <br></br>
                  <Button variant="primary" type="button">
                  Search <i className="fas fa-search"></i>
                </Button>
                </Form.Group>
              </Form>
            </DashboardAsideLeft>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default Dashboard;
