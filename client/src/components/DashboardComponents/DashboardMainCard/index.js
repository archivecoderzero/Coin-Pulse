import React, { Component } from "react";
import CryptoCard from "../CryptoCard";
import { Col, Row } from "../../Grid";
import Button from "react-bootstrap/Button";
import "./style.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


class DashboardMainCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bitcoin: {
        price24hr: "",
        currentPrice: "",
        priceHistory: [],
        trendDirection: 1,
        name: "Bitcoin"
      },
      ethereum: {
        price24hr: "",
        currentPrice: "",
        priceHistory: [],
        trendDirection: 1,
        name: "Ethereum"
      },
      litecoin: {
        price24hr: "",
        currentPrice: "",
        priceHistory: [],
        trendDirection: 1,
        name: "Litecoin"
      }
    }
  }



  convertPercent = (percent, baseNum) => {
    const num = (baseNum * (percent / 100)).toFixed(2);
    const precisePercent = percent.toFixed(2);
    return `(${precisePercent}%) $${num}`
  }

  displayCurrentPrice = num => {
    return `$${num.toFixed(2)}`
  }

  // takes an array
  createChartData = names => {
    names.map(name => {
      return axios.get(`/api/${name}`)
        .then(response => {
          console.log(response.data);
          let data = response.data;
          let currentPrice = this.displayCurrentPrice(data[0].price);
          let price24h = this.convertPercent(data[0].percentChange24h, data[0].price);
          let priceArray = [];
          let obj = this.state[name];
          for (let i = 8; i >= 0; i--) {
            priceArray.push(data[i].price);
          }

          if (data[0].percentChange24h < 0) {
            obj.trendDirection = -1;
            this.setState({[name]: obj})
          }

          // priceHistory[102, 115, 215]
          // Get current named object from state... 
          // Update priceHistory
          obj.priceHistory = priceArray;
          this.setState({[name]: obj});

          obj.currentPrice = currentPrice;
          this.setState({[name]: obj});

          obj.price24h = price24h;
          this.setState({[name]: obj});

        }).catch(error => {
          console.log('api error: ')
          console.log(error);
        })
    });
  }


  componentDidMount() {
    this.createChartData(["bitcoin", "ethereum", "litecoin"])
    console.log(this.state);
  }

  render() {
    const array = ["bitcoin", "ethereum", "litecoin"];
      return (
        <div id="chartsDiv">
          <Row>
            <Col size="md-4 sm-12">
              <CryptoCard
                currencyName='Ethereum'
                currencyPrice={this.state.ethereum.currentPrice}
                icon={<img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png" alt="" />}
                currencyShortName='ETH'
                trend={this.state.ethereum.price24h}
                trendDirection={this.state.ethereum.trendDirection}
                chartData={this.state.ethereum.priceHistory}
                chartColor='#9b59b6'
              />
              <Button id="chartBtn1" variant="primary" type="button">
              <Link to="/chart/eth">Click for Ethereum Sentiment</Link></Button>
            </Col>
            <Col size="md-4 sm-12">
              <CryptoCard
                currencyName='Bitcoin'
                currencyPrice={this.state.bitcoin.currentPrice}
                icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" alt="" />}
                currencyShortName='BTC'
                trend={this.state.bitcoin.price24h}
                trendDirection={this.state.bitcoin.trendDirection}
                chartData={this.state.bitcoin.priceHistory}
              />
              <Button id="chartBtn2" variant="primary" type="button">
                <Link to="/chart/btc">Click for Bitcoin Sentiment</Link>
              </Button>
            </Col>
            <Col size="md-4 sm-12">
              <CryptoCard
                currencyName='Litecoin'
                currencyPrice={this.state.litecoin.currentPrice}
                icon={<img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png" alt="" />}
                currencyShortName='LTC'
                trend={this.state.litecoin.price24h}
                trendDirection={this.state.litecoin.trendDirection}
                chartData={this.state.litecoin.priceHistory}
                chartColor='#4bffd5'
              />
              <Button id="chartBtn3" variant="primary" type="button">
                <Link to="/chart/ltc">Click for Litecoin Sentiment</Link>
              </Button>
            </Col>
          </Row>
        </div>
      );
    }

}

export default DashboardMainCard;
