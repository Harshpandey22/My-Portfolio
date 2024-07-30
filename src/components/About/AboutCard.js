import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Pandey </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am a final year student purshiung BTech in Computer Science and Engineering from Vellore Institute of Technology.  
            <br />
            <br />
            Apart from development & coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket & football
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering latest technologies and gadgets
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring
            </li>
          </ul>

          <p style={{ color: "#900C3F" }}>
            <i>
            "If it's night, then day will come, and if it's day, then night will follow. So never be afraid, as every challenge is followed by a new opportunity."{" "}
          </i>
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
