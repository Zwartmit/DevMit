import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kardex1 from "../../Assets/Projects/kardex1.png";
import kardex2 from "../../Assets/Projects/kardex2.png";
import kardex3 from "../../Assets/Projects/kardex3.png";
import kardex4 from "../../Assets/Projects/kardex4.png";
import pseep1 from "../../Assets/Projects/pseep1.png";
import pseep2 from "../../Assets/Projects/pseep2.png";
// import asuan from "../../Assets/Projects/gvi.png";
import copt1 from "../../Assets/Projects/copt1.jpg";
import copt2 from "../../Assets/Projects/copt2.jpg";
import copt3 from "../../Assets/Projects/copt3.jpg";
import copt4 from "../../Assets/Projects/copt4.jpg";
import copt5 from "../../Assets/Projects/copt5.jpg";

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
              imgPath={kardex1}
              isBlog={false}
              title={translations.kardexTitle}
              projectTitle={translations.project}
              description={translations.kardexDescription}
              ghLink="https://github.com/Zwartmit/Kardex_SENA_CM.git"
              modalImages={[kardex2, kardex1, kardex3, kardex4]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pseep2}
              isBlog={false}
              title={translations.pseepTitle}
              projectTitle={translations.project}
              description={translations.pseepDescription}
              ghLink="https://github.com/Zwartmit/PSEEP_CM.git"
              modalImages={[pseep1, pseep2]}
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asuan}
              isBlog={false}
              title={translations.asuanTitle}
              projectTitle={translations.project}
              description={translations.asuanDescription}
              ghLink="https://github.com/soumyajit4419/Chatify"
              modalImages={[]}
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={copt1}
              isBlog={false}
              title={translations.coptTitle}
              projectTitle={translations.project}
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
