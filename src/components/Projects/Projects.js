import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pseep from "../../Assets/Projects/pseep.png";
import kardex from "../../Assets/Projects/kardex.png";
import asuan from "../../Assets/Projects/gvi.png";
import copt from "../../Assets/Projects/COPT1.jpg";

// Importa las imágenes del modal
import copt1 from "../../Assets/Projects/COPT1.jpg";
import copt2 from "../../Assets/Projects/COPT2.jpg";
import copt3 from "../../Assets/Projects/COPT3.jpg";
import copt4 from "../../Assets/Projects/COPT4.jpg";
import copt5 from "../../Assets/Projects/COPT5.jpg";

function Projects({ translations }) {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">{translations.recentProjects}</h1>
        <p style={{ color: "white" }}>{translations.projectsDescription}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kardex}
              isBlog={false}
              title={translations.kardexTitle}
              description={translations.kardexDescription}
              ghLink="https://github.com/Zwartmit/Kardex_SENA_CM.git"
              modalImages={[copt1, copt2, copt3]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pseep}
              isBlog={false}
              title={translations.pseepTitle}
              description={translations.pseepDescription}
              ghLink="https://github.com/Zwartmit/PSEEP_CM.git"
              modalImages={[copt1, copt2]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asuan}
              isBlog={false}
              title={translations.asuanTitle}
              description={translations.asuanDescription}
              ghLink="https://github.com/soumyajit4419/Chatify"
              modalImages={[copt4, copt5]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={copt}
              isBlog={false}
              title={translations.coptTitle}
              description={[
                translations.coptDescription1,
                <br />,
                translations.coptDescription2,
                <br />,
                translations.coptDescription3,
                <br />,
                translations.coptDescription4,
                <br />,
                translations.coptDescription5,
              ]}
              modalImages={[copt1, copt2, copt3, copt4, copt5]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
