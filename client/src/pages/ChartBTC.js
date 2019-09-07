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



const ContianerChartStyle = {
  padding:2,
  border:3,
  opacity:0.9
};

const infoStyleMain = {
  textAlign:"center",
  fontSize:50,
  position: "relative",
  top: -100,
  color:"white"

};
const ContentJtronStyle = {
  color:"rgba(245, 171, 53, 1)",
  fontSize:75,
}




class App extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "BTC-USD",
          backgroundColor: "rgba(245, 171, 53, 1)",
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
          product_ids: ["BTC-USD"]
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
        <h1 style={ContentJtronStyle}>Bitcoin Chart</h1> 
        <ContainerChart style={ContianerChartStyle}>
      <div className={classes["chart-container"]}>
        <Chart
          data={this.state.lineChartData}
          options={this.state.lineChartOptions}
        />
</div>
</ContainerChart>
<br></br>
<ContentJtron style={ContentJtronStyle}>
<h2 style={infoStyleMain}  >Bitcoin </h2>
<Row>
<Col size="md-1">
</Col>
<Col size="md-3" >
<h5 style={infoStyle} >Ranking  :<span style={spanStyleRed} > #1</span></h5>
<h5 style={infoStyle} >Market Cap :<span style={spanStyleRed} > $186,244,674,747 USD</span></h5>
<h5 style={infoStyle} >Circulating Supply :<span style={spanStyleGreen} > 17,920,125 BTC</span></h5>
<h5 style={infoStyle} >Max Supply :<span style={spanStyleBlue} > 21,000,000 BTC</span></h5>
<h5 style={infoStyle} >All Time High :<span style={spanStyleGreen} > $20,089.00</span></h5>
</Col>
<Col size="md-7" >
<h4 style={infoStyle} >Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash, which would allow online payments to be sent directly from one party to another without going through a financial institution."</h4>
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
