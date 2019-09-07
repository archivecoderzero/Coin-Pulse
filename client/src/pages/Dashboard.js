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
