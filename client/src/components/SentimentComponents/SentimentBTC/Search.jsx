import React from "react";
import SearchForm from "./parts/SearchForm.jsx";
import ContentJtron from "../../ContentJtron";
import { ContainerChart, Col, Row } from "../../Grid";

function Search(props) {
  return (
    <ContentJtron>
      <Row>
      <Col size="md-3"></Col>
        <Col size="md-6">
        <ContainerChart>
            <SearchForm emit={props.emit} initTimestamp={props.initTimestamp} />
        </ContainerChart>
      </Col>
      <Col size="md-3"></Col>
      </Row>
    </ContentJtron>
  );
}
export default Search;

