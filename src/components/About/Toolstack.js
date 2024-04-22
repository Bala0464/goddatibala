import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { DiJava} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows /> {/* Use the Windows icon here */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Placeholder for NetBeans icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode /> {/* Placeholder for PyCharm icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
