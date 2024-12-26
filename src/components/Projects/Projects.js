import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pseep from "../../Assets/Projects/pseep.png";
import kardex from "../../Assets/Projects/kardex.png";
import asuan from "../../Assets/Projects/asuan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyectos <strong> recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los proyectos que he realizado y participado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asuan}
              isBlog={false}
              title="Gestión de ventas e inventario"
              description="El sistema de gestión de inventario, ventas y contabilidad en el parque ecoturístico Asuán permite mejorar la eficiencia operativa del área administrativa. Automatiza procesos y reduce la carga de trabajo manual, minimiza errores y permite una toma de decisiones más ágil."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kardex}
              isBlog={false}
              title="Kardex"
              description="Kardex es un aplicativo usado para la gestión y control de inventario, permitiendo llevar registro de los elementos que se entregan a los aprendices del centro de formación SENA Centro Minero."
              ghLink="https://github.com/Zwartmit/Kardex_SENA_CM.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pseep}
              isBlog={false}
              title="PSEEP"
              description="El aplicativo PSEEP tiene como objetivo llevar control y seguimiento de la etapa productiva de los aprendices del centro de formación SENA Centro Minero, brindando una interfaz intuitiva y eficaz para que los aprendices reporten las actividades realizadas en la empresa donde se encuentran realizando su etapa productiva, permite el cargue de bitácoras y mantener informado al instructor de seguimiento asignado."
              ghLink="hthttps://github.com/Zwartmit/PSEEP_CM.git"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
