import React from "react";
import "./fact.css";
import { Col, Container, Row } from "reactstrap";

const Fact = () => {
  return (
    <div className="container-xxl bg-primary facts my-5 py-5 ">
      <Container className="py-5">
        <Row className="g-4 text-center">
          <Col md="6" lg="3">
            <i class="fa fa-paw fa-3x text-primary mb-3"></i>
            <h1 class="text-white mb-2" data-toggle="counter-up">
              12345
            </h1>
            <p class="text-white mb-0">Total Animal</p>
          </Col>
          <Col md="6" lg="3">
            <i class="fa fa-user fa-3x text-primary mb-3"></i>
            <h1 class="text-white mb-2" data-toggle="counter-up">
              12345
            </h1>
            <p class="text-white mb-0">Daily Vigitors</p>
          </Col>
          <Col md="6" lg="3">
            <i class="fa fa-certificate fa-3x text-primary mb-3"></i>
            <h1 class="text-white mb-2" data-toggle="counter-up">
              12345
            </h1>
            <p class="text-white mb-0">Total Membership</p>
          </Col>
          <Col md="6" lg="3">
            <i class="fa fa-shield-alt fa-3x text-primary mb-3"></i>
            <h1 class="text-white mb-2" data-toggle="counter-up">
              12345
            </h1>
            <p class="text-white mb-0">Save Wild Life</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
