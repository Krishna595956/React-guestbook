import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <><br/>
    <Container fluid className="feedback-benefits">
      <h1>How Feedback Benefits Your Organization</h1><br/>
      <Row>
        <Col sm={12} md={6}>
          <h2>Improved Decision Making</h2>
          <p>
            Feedback provides valuable insights into customer needs, employee experiences, and market trends. This data empowers organizations to make data-driven decisions that are more likely to succeed.
          </p>
        </Col><br/>
        <Col sm={12} md={6}>
          <h2>Enhanced Customer Satisfaction</h2>
          <p>
            By actively collecting and acting on feedback, organizations can identify and address customer pain points. This leads to a more positive customer experience and increased satisfaction.
          </p>
        </Col>
      </Row><br/>
      <Row>
        <Col sm={12} md={6}>
          <h2>Increased Innovation</h2>
          <p>
            Feedback can spark new ideas and creative solutions to problems. By listening to diverse perspectives, organizations can foster innovation and stay ahead of the curve.
          </p>
        </Col>
        <Col sm={12} md={6}>
          <h2>Stronger Employee Engagement</h2>
          <p>
            When employees feel their voices are heard and valued, they're more likely to be engaged and motivated. Feedback mechanisms create a culture of open communication and collaboration.
          </p>
        </Col>
      </Row><br/>
      <Row>
        <Col>
          <p className="call-to-action">
            Start harnessing the power of feedback to improve your organization today!
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;
