import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Lemur  Ai Voice Assistant-"
              description="The Personal Voice Assistant is a Python-based application designed to assist users with various tasks and provide information using voice commands. This project utilizes various libraries and APIs to enable voice recognition, web scraping, and integration with external services."
              ghLink="https://github.com/Bala0464/Lemur---Ai-Voice-Assistant-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Random Password"
              description="The password generator is a utility function designed to create secure and randomized passwords based on specified criteria. It ensures a combination of alphabets, symbols, and numbers to enhance password strength and resilience against unauthorized access."
              ghLink="https://github.com/Bala0464/Random-Password"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tic Tac Toe"
              description="The Tic Tac Toe game is a classic two-player game where players take turns marking spaces on a 3x3 grid with their respective symbols ('X' or 'O'). The objective of the game is to form a horizontal, vertical, or diagonal line of three consecutive symbols. This document outlines the requirements and functionality of the Tic Tac Toe game."
              ghLink="https://github.com/Bala0464/Tic-Tac-Toe"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Smart Agriculture Application"
              description="The Smart Agriculture Application aims to provide farmers with an intelligent solution for optimizing crop management and improving agricultural productivity. By leveraging computer vision and data analysis techniques, the app assists farmers in making informed decisions regarding irrigation, fertilization, pest management, and soil health."
              ghLink="https://github.com/Bala0464/SmartAgriApplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Calculator"
              description="The purpose of this document is to outline the requirements for developing a simple calculator using JavaScript.
              The calculator will provide basic arithmetic operations such as addition, subtraction, multiplication, and division."
              ghLink="https://github.com/Bala0464/JavaScript-Calculator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="PowerPoint Control with Hand Gestures"
              description="The purpose of this project is to control a PowerPoint presentation using hand gestures captured through a webcam. The code allows users to advance to the next slide, go back to the previous slide, return to the first slide, and navigate to the last slide. Additionally, it includes features such as zooming in and out, activating pen mode for annotation, and drawing on slides."
              ghLink="https://github.com/Bala0464/-Hand-Gesture-Based-PPT-Controller"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
