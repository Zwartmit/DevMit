import React from "react";
import Card from "react-bootstrap/Card";
import { SiPioneerdj, } from "react-icons/si";
import { TbRoad } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Actualmente soy aprendiz <b>SENA</b>, estoy cursando la tecnología en análisis y desarrollo de software.
            <br />
            Me apasiona la tecnologia y la programación. Mi enfoque es combinar tecnología y creatividad
            para desarrollar soluciones innovadoras que se adapten a las necesidades de cada proyecto. Como
            desarrollador, me especializo en la creación de aplicaciones multiplataforma
            modernas y eficientes. <br />Además, tengo
            un profundo interés por el modelado y la animación digital. He
            trabajado en la creación de modelos 3D, el diseño de logos, entre otras cosas.
            <br />
            <br />
            Tambien me apasiona...
          </p>
          <ul>
            <li className="about-activity">
              <SiPioneerdj /> Djing&nbsp;&nbsp;&nbsp;
              <TbRoad /> Viajar&nbsp;&nbsp;&nbsp;
              <FaBookOpen /> Leer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El límite no es el cielo, es el ataúd"{" "}
          </p>
          <footer className="blockquote-footer">Métricas Frías</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
