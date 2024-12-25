import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiGit, DiDjango } from "react-icons/di";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons" title="HTML">
        <FaHtml5 title="HTML"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="CSS">
        <FaCss3Alt title="CSS"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="JavaScript">
        <DiJavascript1 title="JavaScript"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="React">
        <DiReact title="React"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="Python">
        <DiPython title="Python"/>
      </Col>
      <Col xs={4} md={1} className="tech-icons" title="Django">
        <DiDjango title="Django"/>
      </Col>
    </Row>
  );
}

export default Techstack;
