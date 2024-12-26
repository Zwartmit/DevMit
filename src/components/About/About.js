import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";

function About({ translations }) {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {translations.aboutTitle}
            </h1>
            <Aboutcard translations={translations} />
          </Col>
          <Col md={5} style={{ paddingTop: "100px", paddingBottom: "50px" }} className="about-img">
            <img src={about} alt="about" className="img-fluid" style={{borderRadius: "100%", boxShadow: "0 0 100px black", border: "5px solid rgb(0, 0, 0)", outline: "8px solid rgba(4, 4, 4, 0.35)" }}/>
          </Col>
        </Row>
        <h1 className="project-heading">
          {translations.skillsTitle}
        </h1>

        <Techstack />

        <h1 className="project-heading">
          {translations.toolsTitle}
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
