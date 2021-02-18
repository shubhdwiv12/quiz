import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
const ResultScreen = () => {
  const [marksObtained, setMarksObtained] = useState(0)
  const location = useLocation();
  //const marksObtained = location.state.result;
  const data = location.state.allQuestions;
  const givenAnswers = location.state.givenAnswers;

  useState(() => {
    givenAnswers.map((ans, index) => {

      if (ans === data[index].answers[data[index].correct_answer]) {
        return setMarksObtained(old => old + 10)

      }
    })
  })

  return (
    <>
      <h2 className="my-4 text-center">Marks Obtained: {marksObtained}/{data.length * 10}</h2>
      <Container>
        <Row>
          <Col md={6}>
            <h4 className="text-center">Your Given Answers</h4>
            {
              data.map((q, index) => (
                <div className="my-2" key={index}>
                  <h5>{q.question}</h5>
                  <div>{givenAnswers[index]}</div>
                </div>

              ))
            }
          </Col>
          <Col md={6}>
            <h4 className="text-center">All Correct Answers</h4>
            {
              data.map((q, index) => (
                <div className="my-2" key={index}>
                  <h5>{q.question}</h5>
                  <div>
                    {

                      q.correct_answer ? q.answers[q.correct_answer] : 'null'
                    }</div>
                </div>

              ))
            }
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ResultScreen
