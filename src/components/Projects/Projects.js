import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emoticon from "../../Assets/Projects/emoticon.PNG";
import editor from "../../Assets/Projects/codeEditor.png";
import capture2 from "../../Assets/Projects/Capture2.PNG";
import rockpaper from "../../Assets/Projects/rockpaper.PNG"; 
import calculator from "../../Assets/Projects/Capture.PNG";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capture2}
              isBlog={false}
              title="Landing Page"
              description="This is a landing page for a instagram account who sells jewelley online using  her instagram account."
              link="https://github.com/abhishek-singh77/LandingPageJwellery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockpaper}
              isBlog={false}
              title="Rock Paper Game"
              description="This is rock paper game I developed using Vanilla Js and css for single player. I'll soon add multiplayer plugin into it."
              link="https://github.com/abhishek-singh77/RockPaperScissor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. This is part of freecodecamp.org certification."
              link="https://codepen.io/abhishek-singh77/pen/oNwLZwW"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A simple calculator built with react just for the sole purpose of understanding how github pages work and how anyone can deloy their projects on github"
              link="https://github.com/abhishek-singh77/reactCalcy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo List"
              description="This is the frontened clone of todoist website I biuld using react.js. It also has all necessary backend part except for the database connection."
              link="https://github.com/abhishek-singh77/todolist1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoticon}
              isBlog={false}
              title="Emoticon eye"
              description="This is a css animated emoticon which follows the position of cursor wherever it goes. I designed it as a part of learnig path for css"
              link="https://github.com/abhishek-singh77/emoticonEye"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
