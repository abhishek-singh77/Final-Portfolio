import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Singh </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />I am an CSE student with major in Full Stack Development.
            <br />
            <br />
            Apart from coding, I enjoy :)!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Digital Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Dev Blogs
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(5, 255, 172)" }}>
            "He always finds himself lost in thought it's unfamiliar territory!"{" "}
          </p>
          <footer className="blockquote-footer">@bhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
