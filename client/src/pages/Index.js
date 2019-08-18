import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import MainCard from "../components/MainCard";
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
        <Row>
          
        <br></br>
          <Col size="md-12">
            <MainCard>
              <h1>MAIN </h1>
            </MainCard>
          </Col>
          <br></br>
        </Row>
        <Row>
          <Col size="md-12">
            <MainCard>
              <h1>ABOUT</h1>
            </MainCard>
          </Col>
          <br></br>
        </Row>

        <Row>
          <Col size="md-12">
            <MainCard>
              <h1>DEVS </h1>
            </MainCard>
          </Col>
          <br></br>
        </Row>
      </Container>
    );
  }
}

export default Books;
