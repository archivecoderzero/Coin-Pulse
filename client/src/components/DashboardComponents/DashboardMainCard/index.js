import React, { Component } from "react";
import CryptoCard from "../CryptoCard";
import { Col, Row } from "../../Grid";

import axios from 'axios'

class DashboardMainCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bitcoinCurrentPrice: "",
      bitcoin24h: "",
      bitcoin1: "",
      bitcoin2: "",
      bitcoin3: "",
      bitcoin4: "",
      bitcoin5: "",
      bitcoin6: "",
      bitcoin7: "",
      bitcoin8: "",
      bitcoin9: "",
      bitcoin10: "",
      ethereumCurrentPrice: "",
      ethereum24h: "",
      ethereum1: "",
      ethereum2: "",
      ethereum3: "",
      ethereum4: "",
      ethereum5: "",
      ethereum6: "",
      ethereum7: "",
      ethereum8: "",
      ethereum9: "",
      ethereum10: "",
      litecoinCurrentPrice: "",
      litecoin24h: "",
      litecoin1: "",
      litecoin2: "",
      litecoin3: "",
      litecoin4: "",
      litecoin5: "",
      litecoin6: "",
      litecoin7: "",
      litecoin8: "",
      litecoin9: "",
      litecoin10: ""

    }
  }

  convertPercent = (percent, baseNum) => {
    const num = (baseNum*(percent/100)).toFixed(2);
    const precisePercent = percent.toFixed(2);
    // num = num.toPrecision(5);
    // percent = percent.toPrecision(4);
    return `(${precisePercent}%) $${num}`
  }

  displayCurrentPrice = num => {
    return `$${num.toFixed(2)}`
  }

  negativeCheck = (num, name) => {
    if (num < 0) {
      this.setState({
        
      })
    }
  }


  componentDidMount() {

    axios.get('/api/bitcoin')
    .then(response => {
        console.log(response.data);
        let data = response.data;
        let currentPrice = this.displayCurrentPrice(data[0].price);
        let percent = this.convertPercent(data[0].percentChange24h, data[0].price);

        this.setState({
          bitcoinCurrentPrice: currentPrice,
          bitcoin24h: percent,
          bitcoin1: data[0].price,
          bitcoin2: data[1].price,
          bitcoin3: data[2].price,
          bitcoin4: data[3].price,
          bitcoin5: data[4].price,
          bitcoin6: data[5].price,
          bitcoin7: data[6].price,
          bitcoin8: data[7].price,
          bitcoin9: data[8].price,
          bitcoin10: data[9].price,
        })
    }).catch(error => {
        console.log('api error: ')
        console.log(error);
    })

    axios.get('/api/ethereum')
    .then(response => {
        console.log(response);
        let data = response.data;
        let currentPrice = this.displayCurrentPrice(data[0].price);
        let percent = this.convertPercent(data[0].percentChange24h, data[0].price);
        this.setState({
          ethereumCurrentPrice: currentPrice,
          ethereum24h: percent,
          ethereum1: data[0].price,
          ethereum2: data[1].price,
          ethereum3: data[2].price,
          ethereum4: data[3].price,
          ethereum5: data[4].price,
          ethereum6: data[5].price,
          ethereum7: data[6].price,
          ethereum8: data[7].price,
          ethereum9: data[8].price,
          ethereum10: data[9].price,
        })
    }).catch(error => {
        console.log('api error: ')
        console.log(error);
    })

    axios.get('/api/litecoin')
    .then(response => {
        console.log(response);
        let data = response.data;
        let currentPrice = this.displayCurrentPrice(data[0].price);
        let percent = this.convertPercent(data[0].percentChange24h, data[0].price);
        this.setState({
          litecoinCurrentPrice: currentPrice,
          litecoin24h: percent,
          litecoin1: data[0].price,
          litecoin2: data[1].price,
          litecoin3: data[2].price,
          litecoin4: data[3].price,
          litecoin5: data[4].price,
          litecoin6: data[5].price,
          litecoin7: data[6].price,
          litecoin8: data[7].price,
          litecoin9: data[8].price,
          litecoin10: data[9].price,
        })
    }).catch(error => {
        console.log('api error: ')
        console.log(error);
    })  
  }

  render() {
    return (
      <div className="jumbotron">
        <Row>
          <Col size="md-4 sm-12">        
            <CryptoCard
              currencyName='Bitcoin'
              currencyPrice={this.state.bitcoinCurrentPrice}
              icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" alt=""/>}
              currencyShortName='BTC'
              trend={this.state.bitcoin24h}
              trendDirection={ this.trend < 0 ? (-1):(1) }
              chartData={[this.state.bitcoin10, this.state.bitcoin9, this.state.bitcoin8, this.state.bitcoin7, this.state.bitcoin6, this.state.bitcoin5, this.state.bitcoin4, this.state.bitcoin3, this.state.bitcoin2, this.state.bitcoin1]}
            />
          </Col>
          <Col size="md-4 sm-12">        
            <CryptoCard
              currencyName='Ethereum'
              currencyPrice={this.state.ethereumCurrentPrice}
              icon={<img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png" alt=""/>}
              currencyShortName='ETH'
              trend={this.state.ethereum24h}
              trendDirection={ this.trend < 0 ? (-1):(1) }
              chartData={[this.state.ethereum10, this.state.ethereum9, this.state.ethereum8, this.state.ethereum7, this.state.ethereum6, this.state.ethereum5, this.state.ethereum4, this.state.ethereum3, this.state.ethereum2, this.state.ethereum1]}
              chartColor='#9b59b6'
            />
          </Col>
          <Col size="md-4 sm-12">        
            <CryptoCard
              currencyName='Litecoin'
              currencyPrice={this.state.litecoinCurrentPrice}
              icon={<img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png" alt=""/>}
              currencyShortName='LTC'
              trend={this.state.litecoin24h}
              trendDirection={ this.trend < 0 ? (-1):(1) }
              chartData={[this.state.litecoin10, this.state.litecoin9, this.state.litecoin8, this.state.litecoin7, this.state.litecoin6, this.state.litecoin5, this.state.litecoin4, this.state.litecoin3, this.state.litecoin2, this.state.litecoin1]}
              chartColor='#ecf0f1'
            /> 
          </Col>
        </Row>
     </div>
    );
  }

}

export default DashboardMainCard;
