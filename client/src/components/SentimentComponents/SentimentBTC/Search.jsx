import React from "react";
import SearchForm from "./parts/SearchForm.jsx";
import SearchJtron from "../../SearchJtron";
import { ContainerChart, Col, Row } from "../../Grid";

function Search(props) {
  return (
    <SearchJtron>
      <Row>
      <Col size="md-3"></Col>
        <Col size="md-6">
            <SearchForm emit={props.emit} initTimestamp={props.initTimestamp} />
      </Col>
      <Col size="md-3"></Col>
      </Row>
    </SearchJtron>
  );
}
export default Search;

