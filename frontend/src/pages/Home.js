import React from "react";
import { Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Home() {
  return (
    <Row>
      <div className="bg"></div>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>

          <h1>Fire Alarm installation and Remote monitoring</h1>
          <p> When it comes to the general security of your home, a fire alarm
            supported by an emergency voice communication system might be quite important.
            Such a system is capable of detecting fire, heat, smoke, and combustion products and
            alerting the fire department and the building's inhabitants to evacuate due to a potential
            fire hazard. We do thorough annual inspections, and our visiting team may recommend
            corrective actions to fix any flaws in your current sprinkler systems.
          </p>
          <LinkContainer to="/services1">
            <button class="btn btn-dark" >
              Explore Now
            </button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg" ></Col>
      
      
      <Col md={6} className="home__bg1"></Col>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center text-align-right ">
        <div >

          <h1>Carbon-monoxide alarm installation and remote monitoring</h1>
          <p> How can you safeguard your family against a danger that you cannot touch, taste, or smell?
            Mobile Security Services is the quickest response. Since we have more experience manufacturing carbon monoxide
            alarms than any other firm, all MSS carbon monoxide (CO) alarm devices, from entry-level models
            to high-end models, come with the proprietary NighthawkTM electrochemical CO sensor. Install one
            outside of every sleeping room and on each floor of your home to experience a whole new level of peace of mind.
          </p>
          <LinkContainer to="/service2">
            <button class="btn btn-dark" >
              Explore Now
            </button>
          </LinkContainer>
        </div>
      </Col>
     
      

      
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center text-align-right ">
        <div >

          <h1>On-site security guards</h1>
          <p> Our qualified security officers are on duty around-the-clock. 
             Use on-site guarding as a stand-alone service on a long-term or short-term basis, 
             or combine it with remote guarding and/or mobile guarding to develop a customised 
             security programme for our distinctive Integrated Guarding Solutions.
             Services for on-site security include:
             Security personnel on-site
             Controlling access, preventing losses, responding to emergencies, and doing inspections
             Concierge and Reception Fire and Life Safety
             Traffic Management
             Security Consulting, Security System Management, and Operation
          </p>
          <LinkContainer to="/service3">
            <button class="btn btn-dark">
              Explore Now
            </button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg2"></Col>

    </Row>

  );
}

export default Home;
