import React from 'react'
import { Container, ProgressBar } from 'react-bootstrap'
import Options from '../components/Options'
const Question = ({ question, qNum, setGivenAns, correct_answers, answers, progress, multiple_correct_answers, checkAnswer }) => {
  const singleOrMultiple = multiple_correct_answers !== 'false' ? 'checkbox' : 'radio'


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
                  setGivenAns={setGivenAns}
                  singleOrMultiple={singleOrMultiple}
                  checkAnswer={checkAnswer}
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
