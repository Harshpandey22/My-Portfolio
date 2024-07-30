import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              title="ChatPDF"
              description="This platform allows users to upload PDF files and ask complex questions about the content. The system provides precise, conversational answers, improving user satisfaction and query resolution efficiency by 50%. It is particularly useful for researchers, students, and professionals who need quick and accurate information extraction from large documents."
              ghLink="https://github.com/Harshpandey22/Chat-with-PDF"
              demoLink="https://chat-with-pdf-by-harsh.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Insight"
              description="This real-time facial recognition platform helps educators identify and analyze student emotions during classes. It improves cognitive assessment by providing insights into student engagement and emotional states, reducing exam stress indicators by 25% and increasing classroom interaction by 30%. This tool supports educators in creating a more responsive and supportive learning environment."
              ghLink="https://github.com/Harshpandey22/Real-Time-Face-Emotion-Detection"
              demoLink="https://real-time-face-emotion-by-harsh.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NailWise"
              description="This healthcare application uses image recognition to analyze nail images for early disease diagnosis. It provides comprehensive insights into the causes, symptoms, and treatments of various conditions, enhancing patient outcomes and clinician efficiency by 40%. This tool is valuable for early detection and proactive healthcare management."
              ghLink="https://github.com/Harshpandey22/Nail-Wise"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="PlantGuard"
              description="This application detects plant diseases and provides detailed information on their causes, cures, and prevention. It helps farmers and gardeners protect their crops by offering timely and accurate diagnoses, leading to healthier plants and increased yields. This tool is essential for sustainable agriculture and proactive plant care."
              ghLink="https://github.com/Harshpandey22/Plant-Disease-Detection"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
