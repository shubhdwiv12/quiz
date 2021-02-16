import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Instructions = () => {
  return (
    <Container className="my-4 border border-primary instruction">
      <Row>
        <Col className="text-center my-2" sm={12}>
          <h2>Instructions</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p>1. The following Quiz contains 10 Questions</p>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p>2. Each questions are of 10 Marks and you will be alloted 15 seconds to attend each questions.</p>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p>3. Once 15 seconds, The questions will automatically move towards next question, Once you will attend the question within 15 seconds, it will move forward again.</p>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p>3. Good Luck </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Instructions
