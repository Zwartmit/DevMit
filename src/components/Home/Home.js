import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home({ translations }) {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {translations.greeting}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>{" "}
                {translations.welcomeMessage}
              </h1>

              <h1 className="heading-name">
                {translations.iAm}
                <strong className="main-name"> Brandon Urbano</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type translations={translations} />
              </div>
            </Col>
            <Col md={5} style={{ paddingTop: 20, paddingLeft: 20 }}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "360px",
                  borderRadius: "100%",
                  boxShadow: "0 0 100px black",
                  border: "5px solid rgb(0, 0, 0)",
                  outline: "8px solid rgba(4, 4, 4, 0.35)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 translations={translations} />
    </section>
  );
}

export default Home;
