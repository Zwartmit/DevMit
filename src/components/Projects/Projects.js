import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pseep from "../../Assets/Projects/pseep.png";
import kardex from "../../Assets/Projects/kardex.png";
import asuan from "../../Assets/Projects/asuan.png";

function Projects({ translations }) {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {translations.recentProjects}
        </h1>
        <p style={{ color: "white" }}>
          {translations.projectsDescription}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asuan}
              isBlog={false}
              title={translations.asuanTitle}
              description={translations.asuanDescription}
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kardex}
              isBlog={false}
              title={translations.kardexTitle}
              description={translations.kardexDescription}
              ghLink="https://github.com/Zwartmit/Kardex_SENA_CM.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pseep}
              isBlog={false}
              title={translations.pseepTitle}
              description={translations.pseepDescription}
              ghLink="https://github.com/Zwartmit/PSEEP_CM.git"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
