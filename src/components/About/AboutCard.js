import React from "react";
import Card from "react-bootstrap/Card";
import { SiPioneerdj } from "react-icons/si";
import { LuScale3D } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

function AboutCard({ translations }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {translations.aboutText1}
            <br />
            <br />
            {translations.aboutText2}
            <br /> {translations.aboutText3}
          </p>
          <ul>
            <li className="about-activity">
            &nbsp;&nbsp;&nbsp;<SiPioneerdj /> {translations.hobby1}
            &nbsp;&nbsp;&nbsp;<LuScale3D /> {translations.hobby2}
            &nbsp;&nbsp;&nbsp;<MdDesignServices  /> {translations.hobby3}
            &nbsp;&nbsp;&nbsp;<TbRoad /> {translations.hobby4}
            &nbsp;&nbsp;&nbsp;<FaBookOpen /> {translations.hobby5}
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            {translations.quote}
          </p>
          <footer className="blockquote-footer">{translations.quoteAuthor}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
