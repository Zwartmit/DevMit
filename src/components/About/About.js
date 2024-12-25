import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conoce <strong>sobre mi</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "100px", paddingBottom: "50px" }} className="about-img">
            <img src={about} alt="about" className="img-fluid" style={{borderRadius: "100%", boxShadow: "0 0 100px black", border: "5px solid rgb(0, 0, 0)", outline: "8px solid rgba(4, 4, 4, 0.35)" }}/>
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades <strong >profesionales </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong >Herramientas</strong> que uso
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
