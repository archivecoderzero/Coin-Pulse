import React from "react";
import SearchForm from "./parts/SearchForm.jsx";
import ContentJtron from "../../ContentJtron";
import { ContainerChart, Col, Row } from "../../Grid";


function Search(props) {
  return (
    <ContentJtron>
      <Row>
        <ContainerChart>
            <SearchForm emit={props.emit} initTimestamp={props.initTimestamp} />
        </ContainerChart>
      </Row>
    </ContentJtron>
  );
}
export default Search;

