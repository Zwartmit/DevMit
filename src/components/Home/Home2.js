import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2({ translations }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{translations.mySocials}</h1>
            <ul className="home-about-social-links">
              <li className="social-icons" title={translations.email}>
                <a href="mailto:brandonurbanobuz@gmail.com" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons" title={translations.github}>
                <a href="https://github.com/zwartmit" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" title={translations.linkedin}>
                <a href="https://www.linkedin.com/in/brandonurbano-dev/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" title={translations.instagram}>
                <a href="https://www.instagram.com/zwart_mit/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
