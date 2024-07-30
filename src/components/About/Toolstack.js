import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: '#007ACC' }} /> {/* VS Code Blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow style={{ color: '#FF6F00' }} /> {/* TensorFlow Orange */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras style={{ color: '#D00000' }} /> {/* Keras Red */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv style={{ color: '#5C2D91' }} /> {/* OpenCV Purple */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter style={{ color: '#F37626' }} /> {/* Jupyter Orange */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: '#FF6C37' }} /> {/* Postman Orange */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack style={{ color: '#4A154B' }} /> {/* Slack Dark Purple */}
      </Col>
    </Row>
  );
}

export default Toolstack;
