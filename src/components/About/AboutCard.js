import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Goddati Bala Krishna Prasad </span>
            from <span className="purple"> Vizag, India.</span>
            <br />
            <br />
            I'm a software fresher passionate about crafting elegant solutions to complex problems.
            Armed with proficiency in Python, Java, and C++, I'm eager to dive into software development's 
            dynamic world, where I enjoy creating intuitive interfaces and optimizing algorithms.
            <br />
            <br/>
            Driven by enthusiasm and a commitment to excellence, I approach every challenge with a 
            thirst for learning and collaboration. Excited to embark on this journey of innovation, 
            I'm ready to contribute to the ever-evolving field of software engineering. Let's build 
            something amazing together!
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Oragami/Archery
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build small things that make a large difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
