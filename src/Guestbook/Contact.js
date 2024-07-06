import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!'); // Simulate form submission (replace with actual logic)
  };

  return (
    <Container fluid className="contact-page">
      <center><h1>Contact Us</h1></center><br/>
      <p>Get in touch with us if you have any questions or feedback.</p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={6}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" required />
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write your message here" required />
        </Form.Group><br/>
        <center><Button variant="success" type="submit">
          Submit
        </Button></center>
      </Form>
    </Container>
  );
}

export default ContactPage;
