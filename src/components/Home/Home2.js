import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I enjoy having fun with them.
              <br />
              <br />I am fluent in Languages like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new{" "}
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Digital Marketing and Web security.
                </b>
              </i>
              <br />
              <br />
              I always intend to design great looking web apps using &nbsp;  
              <b className="purple">Node.js, Django</b> and
              <i>
                <b className="purple">
                  {" "}
                  Frontend libraries
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Next.js and Angular.Js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <h3>
              Feel free to <span className="purple">connect </span>with me on
            </h3>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/abhishek-singh77"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/qr/P2CFNKIHIWFMF1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abhisheksingh772000/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/abhi_7.7/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
