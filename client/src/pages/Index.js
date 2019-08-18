import React, { Component } from "react";

// INDEX COMPONENT ----> START
import MainCard from "../components/IndexComponents/MainCard";
import AboutCard from "../components/IndexComponents/AboutCard";
import DevsCard from "../components/IndexComponents/DevsCard";
import SignupCard from "../components/IndexComponents/SignupCard";
// INDEX COMPONENT ----> END

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
        <br></br>

        {/* MAIN CARD START -----------------------> */}
        <Row>
        <br></br>
          <Col size="md-12">
            <MainCard>
              <h1>MAIN </h1>
            </MainCard>
          </Col>
          <br></br>
        </Row>
        {/* MAIN CARD END -----------------------> */}


        {/* ABOUT CARD START -----------------------> */}
        <Row>
          <Col size="md-12">
            <AboutCard>
              <h1>ABOUT</h1>
            </AboutCard>
          </Col>
          <br></br>
        </Row>
        {/* ABOUT CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <Col size="md-12">
            <DevsCard>
              <h1>DEVS </h1>
            </DevsCard>
          </Col>
          <br></br>
        </Row>
        {/* DEVS CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
          <Row>
          <Col size="md-12">
            <SignupCard>
              <h1>Sign-up </h1>
            </SignupCard>
          </Col>
          <br></br>
        </Row>
        {/* DEVS CARD START -----------------------> */}

      </Container>
    );
  }
}

export default Books;
