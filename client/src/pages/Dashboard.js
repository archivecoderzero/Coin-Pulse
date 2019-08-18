import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import DashboardMainCard from "../components/DashboardComponents/DashboardMainCard"
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
          icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png"/>}
          currencyShortName='BTC'
          trend='(8.54%) $563.47'
          trendDirection={1}
          chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
        />

        <CryptoCard
          currencyName='Ethereum'
          currencyPrice='$766.12'
          icon={<img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png"/>}
          currencyShortName='ETH'
          trend='(7.32%) $14.94'
          trendDirection={1}
          chartData={[760, 500, 800, 670, 820, 620, 796, 766]}
          chartColor='#9b59b6'
        />

        <CryptoCard
          currencyName='Litecoin'
          currencyPrice='$137.92'
          icon={<img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png"/>}
          currencyShortName='LTC'
          trend='(-5.12%) $6.34'
          trendDirection={-1}
          chartData={[90, 120, 115, 85, 75, 92, 70, 101, 111, 137]}
          chartColor='#ecf0f1'
        />
        </DashboardMainCard>
      </Container>
    );
  }
}

export default Books;
