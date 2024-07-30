import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiUbuntu,
  DiCisco,
} from "react-icons/di";
import {
  SiMysql,
  SiArduino
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: '#007396' }} /> {/* Java Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: '#306998' }} /> {/* Python Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ color: '#00599C' }} /> {/* C++ Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: '#F7DF1E' }} /> {/* JavaScript Yellow */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: '#8CC84B' }} /> {/* Node.js Green */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: '#61DAFB' }} /> {/* React Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: '#4DB33D' }} /> {/* MongoDB Green */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: '#F1502F' }} /> {/* Git Red */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{ color: '#00758F' }} /> {/* MySQL Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCisco style={{ color: '#0F7D92' }} /> {/* Cisco Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu style={{ color: '#E95420' }} /> {/* Ubuntu Orange */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino style={{ color: '#00979D' }} /> {/* Arduino Blue */}
      </Col>
    </Row>
  );
}

export default Techstack;
