import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import DashboardMainCard from "../components/DashboardComponents/DashboardMainCard"
import DashboardAsideLeft from "../components/DashboardComponents/DashboardAsideLeft"
import DashboardAsideRight from "../components/DashboardComponents/DashboardAsideRight"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {

  state = {


  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (

      <Container fluid>
        <DashboardMainCard />



        <Row>
          <Col size="md-4">
            <DashboardAsideLeft>
              <h3>Trending Articles</h3>
            </DashboardAsideLeft>
          </Col>

          <Col size="md-4">
            <DashboardAsideRight>
              <h3>Top Traders : </h3>
              <ul>
                <li>Trader 1 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 2 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 3 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 4 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 5 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 6 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 7 : 99% Success Rate : 10000 Bit Points </li>
                <li>Trader 8 : 99% Success Rate : 10000 Bit Points </li>
              </ul>
            </DashboardAsideRight>
          </Col>
          <Col size="md-4">
            <DashboardAsideRight>
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
            </DashboardAsideRight>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
