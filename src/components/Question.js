import React, { useState, useEffect } from 'react'
import { Container, ProgressBar, Row } from 'react-bootstrap'
import Options from '../components/Options'
const Question = ({ question, qNum, givenAns, correct_answers, answers, progress, multiple_correct_answers }) => {
  const singleOrMultiple = multiple_correct_answers !== 'false' ? 'checkbox' : 'radio'

  const correctAnswer = Object.keys(correct_answers).filter((ans) => correct_answers[ans] === 'true' ? ans : null)
  //const correctAnswer2 = correctAnswer1[0].splice(0, 7)
  const finalAnswer = answers[correctAnswer[0].split('').splice(0, 8).join('')]
  return (
    <>
      <Container className="border border-primary my-2 instruction">
        <h4 className="p-4">Q{qNum + 1}.{question} </h4>
        <section className="m-2">
          {
            Object.values(answers).map((answer) => (
              answer != null ?
                <Options answer={answer}
                  question={question}
                  givenAns={givenAns}
                  correct_answer={finalAnswer}
                  singleOrMultiple={singleOrMultiple}
                  key={answer} /> : null
            ))

          }
        </section>
        <Container className="d-flex flex-column-reverse  prog ">
          <ProgressBar className="my-4" variant="success" now={progress} />
        </Container>



      </Container>
    </>


  )
}

export default Question
