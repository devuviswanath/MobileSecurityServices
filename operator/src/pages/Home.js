import React from "react";
import { Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../components/Header.js";
function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Customer Service and Support</h1>
          <p>
            We're here to assist if you're having a problem. We provide thorough
            documentation for each of our services to assist you in resolving
            any problems.
          </p>
          <LinkContainer to="/chat">
            <button class="btn btn-dark">
              Contact us<i className="fas fa-comments home-message-icon"></i>
            </button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home;
