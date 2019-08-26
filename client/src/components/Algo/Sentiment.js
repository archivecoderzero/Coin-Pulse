import React, { Component } from "react";
import { Container, Row, Col } from "./Grid";
import Input from "./Input";
import Button from "./Button";
import API from "./utils/API";

class sentiment extends Component {
    state = {
      recipes: [],
      recipeSearch: ""
    };
  
    handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      API.getRecipes(this.state.keyword)
        .then(res => this.setState({ keyword: res.data }))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div
        style={{ width: "100%", textAlign: "center" , background: "" }}
        className="jumbotron"
      >     
               <Row>
        
       <form>
          <Col size="sm-12">
            <Input
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleInputChange}
              placeholder="Search a Keyword"
            />
          </Col>
          <br></br>
          <Col size="md-6">
            <Button
              onClick={this.handleFormSubmit}
              type="info"
              className="input-sm"
            >
              Calculate Sentiment
            </Button>
          </Col>
    </form>

    <Col size="sm-6 sm-6">
      <h3>Sentiment ID : </h3>
      <h3>Score : </h3>
      <h3>Current Price: </h3>
      <h3>Predicted Price: </h3>
      <h3>Suggested Move: </h3>
    </Col>
    </Row>
      </div>
    );
  }
}

export default sentiment;
