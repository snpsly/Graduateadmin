import React from "react";
import Active from "./components/Card";

import { Col, Row, Card } from "antd";

const Home = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <Active></Active>
        </Col>
        <Col span={12} offset={4}></Col>
      </Row>
    </>
  );
};
export default Home;
