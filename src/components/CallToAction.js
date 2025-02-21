import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CallToAction = () => (
  <section id="cta" className="py-5 bg-primary text-white text-center">
    <Container>
      <Row>
        <Col>
          <h2>Ready to Get Started?</h2>
          <p>Sign up today and experience the difference.</p>
          <Button variant="light" href="#footer">
            Join Now
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default CallToAction;
