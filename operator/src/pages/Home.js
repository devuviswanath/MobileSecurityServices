import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../components/ServiceCard";

import { getAllServices } from "../features/services/servicesSlice";

function Home() {
  const serviceState = useSelector((state) => state?.service?.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  return (
    <>
      <Meta title={"Home"} />
      <Container class1="home-wrapper-1  py-2">
        <div className="row">
          <Col
            md={6}
            className="d-flex flex-direction-column align-items-center justify-content-center"
          >
            <div>
              <h1>Customer Service and Support</h1>
              <p>
                We're here to assist if you're having a problem. We provide
                thorough documentation for each of our services to assist you in
                resolving any problems.
              </p>
              <LinkContainer to="/chat">
                <button class="btn btn-dark">
                  Contact us
                  <i className="fas fa-comments home-message-icon"></i>
                </button>
              </LinkContainer>
            </div>
          </Col>
          <Col md={6} className="home__bg"></Col>
        </div>
      </Container>
      <Container class1="service-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Services</h3>
          </div>
          <ServiceCard data={serviceState ? serviceState : []} />
        </div>
      </Container>
    </>
  );
}

export default Home;
