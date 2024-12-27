import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { BsSearch } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>&nbsp;&nbsp; */}
            <Button variant="secondary" onClick={handleShow}>
              <BsSearch />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.projectTitle}: {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {props.modalImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`slide-${index}`} style={{ borderRadius: "20px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
