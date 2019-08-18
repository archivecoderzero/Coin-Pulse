import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SignupCard from "../components/LoginComponents/SignupCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Colx from "react-bootstrap/Col";



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
        <SignupCard>
          <h1> Sign-Up</h1>
        <Form>

  <Form.Row>
    <Form.Group as={Colx} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Colx} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>  
  
  <Form.Row>
    <Form.Group as={Colx} controlId="formGridEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Colx} controlId="formGridPassword">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Your Name" />
    </Form.Group>


  </Form.Row>



  <Form.Group as={Colx} controlId="formGridPassword">
      <Form.Label>About</Form.Label>
      <Form.Control type="text" placeholder="Password" />
    </Form.Group>
    

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </SignupCard>
      </Container>
    );
  }
}

export default Books;
