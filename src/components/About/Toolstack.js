import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiDjango } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="MySQL">
        <SiMysql title="MySQL"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="Django">
        <DiDjango title="Django"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="GitHub">
        <FaGithub title="GitHub"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
