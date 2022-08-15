import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../constants/data_items.json";
import StoreItem from "./../components/StoreItem";

function Store() {
  return (
    <Fragment>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Store;
