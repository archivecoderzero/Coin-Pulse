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
  color:"white"

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
  backgroundColor:"grey",
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
  color:"rgb(211,211,211)",
  fontSize:75,

}




class App extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "LTC-USD",
          backgroundColor: "rgb(211,211,211)",
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
          product_ids: ["LTC-USD"]
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
        <h1 style={ContentJtronStyle}>Litecoin Chart</h1> 
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
<h2 style={infoStyleMain}  >Litecoin </h2>
<Row>
<Col size="md-1">
</Col>
<Col size="md-3" >
<h5 style={infoStyle} >Ranking  :<span style={spanStyleBlue} > #5</span></h5>
<h5 style={infoStyle} >Market Cap :<span style={spanStyleRed} > $4,109,048,043 USD</span></h5>
<h5 style={infoStyle} >Circulating Supply :<span style={spanStyleGreen} >63,199,587 LTC</span></h5>
<h5 style={infoStyle} >Max Supply :<span style={spanStyleBlue} >84,000,000 LTC</span></h5>
<h5 style={infoStyle} >All Time High :<span style={spanStyleGreen} > $375.29</span></h5>
</Col>
<Col size="md-7" >
<h4 style={infoStyle} >Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used. Litecoin uses the memory intensive Scrypt proof of work mining algorithm. Scrypt allows consumer-grade hardware such as GPU to mine those coins</h4>
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
