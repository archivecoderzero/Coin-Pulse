import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import DashboardMainCard from "../components/DashboardComponents/DashboardMainCard"
import DashboardAsideLeft from "../components/DashboardComponents/DashboardAsideLeft"
import DashboardAsideRight from "../components/DashboardComponents/DashboardAsideRight"

import CryptoCard from "../components/DashboardComponents/CryptoCard"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <DashboardMainCard>
          <CryptoCard
            currencyName='Bitcoin'
            currencyPrice='$8850.32'
            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" />}
            currencyShortName='BTC'
            trend='(8.54%) $563.47'
            trendDirection={1}
            chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
          />

          <CryptoCard
            currencyName='Ethereum'
            currencyPrice='$766.12'
            icon={<img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png" />}
            currencyShortName='ETH'
            trend='(7.32%) $14.94'
            trendDirection={1}
            chartData={[760, 500, 800, 670, 820, 620, 796, 766]}
            chartColor='#9b59b6'
          />

          <CryptoCard
            currencyName='Litecoin'
            currencyPrice='$137.92'
            icon={<img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png" />}
            currencyShortName='LTC'
            trend='(-5.12%) $6.34'
            trendDirection={-1}
            chartData={[90, 120, 115, 85, 75, 92, 70, 101, 111, 137]}
            chartColor='#ecf0f1'
          />


          <CryptoCard
            currencyName='Cryptocurrency 1'
            currencyPrice='$99.2'
            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" />}
            currencyShortName='SAMPLE1'
            trend='(8.54%) $99.47'
            trendDirection={1}
            chartData={[5, 5, 6, 9, 7, 5, 6, 1, 99, 6, 3, 4, 5, 6, 6]}
            chartColor='#333333'
          />

          <CryptoCard
            currencyName='Cryptocurrency 2'
            currencyPrice='$99.2'
            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" />}
            currencyShortName='Sample 2'
            trend='(8.54%) $55.47'
            trendDirection={1}
            chartData={[5, 67, 6, 9, 95, 5, 6, 1, 4, 6, 3, 4, 5, 6, 886]}
            chartColor='#800000'
          />

          <CryptoCard
            currencyName='Cryptocurrency 3'
            currencyPrice='$99.2'
            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" />}
            currencyShortName='Sample 3'
            trend='(8.54%) $33.47'
            trendDirection={1}
            chartData={[5, 5, 664, 9, 7, 55, 6, 1, 99, 6, 3, 4, 5, 6, 6]}
            chartColor='#FF00FF'
          />
        </DashboardMainCard>

<Row>
<Col size="md-6 sm-12">
<DashboardAsideLeft>
  <h3>Trending Articles</h3>
</DashboardAsideLeft>

</Col>

<Col size="md-3 sm-12">
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


<Col size="md-3 sm-6">

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

export default Books;
