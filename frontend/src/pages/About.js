import React from 'react';
import AboutImg from '../Images/kiran.jpg';
import AboutImg1 from '../Images/mukal.jpg';
import AboutImg2 from '../Images/devu.jpg'
{/*import {Row, Col} from 'react-bootstrap';*/}

export default function About() {
  return (
    <>
     <div class="about-area">
        <div class="container">
            <div class="background">
                <div class="col-lg-10 col-lg-offset-1">
                    <div class="about-text">
                        <h2>About Us</h2>
                        <p>Welcome to MobileSecurityService, where we offer a comprehensive range of security 
                          services including remote video surveillance, fire alarm installation and remote 
                          monitoring, carbon-monoxide alarm installation and remote monitoring, and on-site security
                           guards. Our user-friendly platform allows customers to register, login, and easily 
                           access information about the security services and contracts, place orders, and 
                           enable/disable security features remotely. With the ability to pause/resume remote video
                            surveillance, turn off false fire alarms, and access recordings, customers have full
                             control over their security. Additionally, our integrated communication system enables
                              real-time online communication with our operators, ensuring prompt assistance and
                               updates. Trust MobileSecurityService to provide exceptional security solutions that
                                prioritize your convenience and peace of mind.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="container">
      <div className='heading'>
            <h2>The Team</h2>
          </div>
        <div className="top-section">
          
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Devu Viswanath Suma </span>
            </p>
            <h2 className="about__heading">Backend developer</h2>
            <div className="about__info">
              <p>
                I am a passionate individual from India. I hold a degree in Bachelor of
                Computer Applications (BCA) and currently,
                I'm pursuing my studies as an international student in
                the field of Computer Software and Database Development in
                Lambton College, Mississauga.
                <br /> <br />
                As part of my academic journey, I'm working on various projects,
                and one of my roles involves working as a tester. This allows
                me to apply my knowledge and skills to ensure the quality and functionality
                of software applications. I thoroughly enjoy the process of testing,
                identifying bugs, and providing valuable feedback to enhance the overall user experience.
                <br />
              </p>
            </div>

          </div>
          <div className="right">
            <img src={AboutImg2} alt="me" />
          </div>
        </div>
      </div>
      
     {/*} <Row>
        {persons.map((person) => (
          <Col key={person._id} md={6} lg={4} className="person">
            <h2>{person.name}</h2>
            <p>Email: {person.email}</p>
            <p>Position: {person.position}</p>
            <p>Contact: {person.contact}</p>
          </Col>
        ))}
        </Row>*/}

      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Mukal Jindal</span>
            </p>
            <h2 className="about__heading">Frontend developer</h2>
            <div className="about__info">
              <p>
                I am a passionate individual from India. I hold a degree in Bachelor of
                Computer Applications (BCA) and currently,
                I'm pursuing my studies as an international student in
                the field of Computer Software and Database Development in
                Lambton College, Mississauga.
                <br /> <br />
                As part of my academic journey, I'm working on various projects,
                and one of my roles involves working as a tester. This allows
                me to apply my knowledge and skills to ensure the quality and functionality
                of software applications. I thoroughly enjoy the process of testing,
                identifying bugs, and providing valuable feedback to enhance the overall user experience.
                <br />
              </p>
            </div>

          </div>
          <div className="right">
            <img src={AboutImg1} alt="me" />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Kirandeep Kaur Dhanoa</span>
            </p>
            <h2 className="about__heading">Tester</h2>
            <div className="about__info">
              <p>
                I am a passionate individual from India. I hold a degree in Bachelor of
                Computer Applications (BCA) and currently,
                I'm pursuing my studies as an international student in
                the field of Computer Software and Database Development in
                Lambton College, Mississauga.
                <br /> <br />
                As part of my academic journey, I'm working on various projects,
                and one of my roles involves working as a tester. This allows
                me to apply my knowledge and skills to ensure the quality and functionality
                of software applications. I thoroughly enjoy the process of testing,
                identifying bugs, and providing valuable feedback to enhance the overall user experience.
                <br />
              </p>
            </div>

          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
      </div>




    </>
  );
}

