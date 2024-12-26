import React from "react";
import Card from "react-bootstrap/Card";
import { SiPioneerdj } from "react-icons/si";
import { TbRoad } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";

function AboutCard({ translations }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {translations.aboutText1}
            <b>SENA</b>, {translations.aboutText2}
            <br />
            {translations.aboutText3}
            <br /> {translations.aboutText4}
            <br />
            <br />
            {translations.aboutText5}
          </p>
          <ul>
            <li className="about-activity">
              <SiPioneerdj /> {translations.hobby1}&nbsp;&nbsp;&nbsp;
              <TbRoad /> {translations.hobby2}&nbsp;&nbsp;&nbsp;
              <FaBookOpen /> {translations.hobby3}
            </li>
          </ul>

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
