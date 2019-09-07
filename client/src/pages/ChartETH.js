import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chart from "../components/SentimentComponents/chart";
import amber from '@material-ui/core/colors/amber';
import { ContainerChart , Col , Row } from "../components/Grid";
import ContentJtron from "../components/ContentJtron";

const styles = theme => ({
  "chart-container": {
    marginTop:10,
    height: 400,
    width: "100%",
    primary: amber,
  }
});

const infoStyle = {
  textAlign:"left",
  color: "white"

};

const spanStyleRed = {
  color: "red"
};

const spanStyleGreen = {
  color: "green"
};

const spanStyleBlue = {
  color: "blue"
};

const infoStyleMain = {
  textAlign:"center",
  fontSize:50,
  position: "relative",
  top: -100,
  color: "white"

};

const ContentJtronStyle = {
  color:"rgba(89, 171, 227, 1)",
  fontSize:75,
}

class App extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "ETH-USD",
          backgroundColor: "rgba(89, 171, 227, 1)",
          border: 0,
          borderColor: this.props.theme.palette.primary,
          pointBackgroundColor: this.props.theme.palette,
          pointBorderColor: this.props.theme.palette.light,
          borderWidth: "3",
          lineTension: 0.01,
          data: []
        }
      ]
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          }
        ]
      }
    }
  };

  componentDidMount() {
    const subscribe = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: ["ETH-USD"]
        }
      ]
    };
    this.ws = new WebSocket("wss://ws-feed.gdax.com");
    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };
    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") {
        return;
      }
      const oldBtcDataSet = this.state.lineChartData.datasets[0];
      const newBtcDataSet = { ...oldBtcDataSet };
      newBtcDataSet.data.push(value.price);
      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newBtcDataSet],
        labels: this.state.lineChartData.labels.concat(
          new Date().toLocaleTimeString()
        )
      };
      this.setState({ lineChartData: newChartData });
    };
  }
  componentWillUnmount() {
    this.ws.close();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="spacer">
        <br></br>
        <br></br>       
        <br></br>
        <h1 style={ContentJtronStyle}>Ethereum Chart</h1> 
        <ContainerChart>
      <div className={classes["chart-container"]}>
        <Chart
          data={this.state.lineChartData}
          options={this.state.lineChartOptions}
        />
</div>
</ContainerChart>
<br></br>
<ContentJtron style={ContentJtronStyle}>
<h2 style={infoStyleMain}  >Ethereum </h2>
<Row>
<Col size="md-1">
</Col>
<Col size="md-3" >
<h5 style={infoStyle} >Ranking  :<span style={spanStyleBlue} > #2</span></h5>
<h5 style={infoStyle} >Market Cap :<span style={spanStyleRed} > $18,302,709,200 USD</span></h5>
<h5 style={infoStyle} >Circulating Supply :<span style={spanStyleGreen} > 107,638,016 ETH</span></h5>
<h5 style={infoStyle} >Max Supply :<span style={spanStyleBlue} > No Data </span></h5>
<h5 style={infoStyle} >All Time High :<span style={spanStyleGreen} > $1,432.88 USD</span></h5>
</Col>
<Col size="md-7" >
<h4 style={infoStyle} >Ethereum is the pioneer for blockchain based smart contracts. When running on the blockchain a smart contract becomes like a self-operating computer program that automatically executes when specific conditions are met. On the blockchain, smart contracts allow for code to be run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference. It can facilitate the exchange of money, content, property, shares, or anything of value. The Ethereum network went live on July 30th, 2015 with 72 million Ethereum premined.</h4>
</Col>
<Col size="md-1">
</Col>
</Row>
</ContentJtron>
<br></br>
<br></br>
<br></br>

      </div>

    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
