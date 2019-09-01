import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import DashboardMainCard from "../components/DashboardComponents/DashboardMainCard"
import DashboardAsideLeft from "../components/DashboardComponents/DashboardAsideLeft"
import DashboardAsideRight from "../components/DashboardComponents/DashboardAsideRight"
import CryptoCard from "../components/DashboardComponents/CryptoCard"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
class Dashboard extends Component {
  handleSubmit = event => {
    event.preventDefault()
  }

  componentDidMount() {

    axios.get('/api/')
    .then(response => {
        console.log(response);
        console.log("end api");
    }).catch(error => {
        console.log('api error: ')
        console.log(error);
    })
  }

  render() {
    return (

      <Container fluid>
        <DashboardMainCard onClick={this.handleSubmit}>
        <Row>
        <Col size="md-4">
          <CryptoCard
            currencyName='Bitcoin'
            currencyPrice='$8850.32'
            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" alt=""/>}
            currencyShortName='BTC'
            trend='(8.54%) $563.47'
            trendDirection={1}
            chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
          />
          </Col>
          <Col size="md-4">
          <CryptoCard
            currencyName='Ethereum'
            currencyPrice='$766.12'
            icon={<img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png" alt=""/>}
            currencyShortName='ETH'
            trend='(7.32%) $14.94'
            trendDirection={1}
            chartData={[760, 500, 800, 670, 820, 620, 796, 766]}
            chartColor='#9b59b6'
          />
          </Col>
          <Col size="md-4">
          <CryptoCard
            currencyName='Litecoin'
            currencyPrice='$137.92'
            icon={<img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png" alt=""/>}
            currencyShortName='LTC'
            trend='(-5.12%) $6.34'
            trendDirection={-1}
            chartData={[90, 120, 115, 85, 75, 92, 70, 101, 111, 137]}
            chartColor='#ecf0f1'
          />
          </Col>
          </Row>
        </DashboardMainCard>
        
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
                Search <i class="fas fa-search"></i>
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
