import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">Hola{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> bienvenidos a mi portafolio.
              </h1>

              <h1 className="heading-name">Soy
                <strong className="main-name"> Brandon Urbano</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={myImg} alt="home pic" className="img-fluid" style={{ maxHeight: "397px", borderRadius: "100%", boxShadow: "0 0 100px black", border: "5px solid rgb(0, 0, 0)", outline: "8px solid rgba(4, 4, 4, 0.35)" }}/>
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
