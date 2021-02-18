import React from 'react'
import { Form } from 'react-bootstrap'
const Options = ({ answer, checkAnswer, question, singleOrMultiple, qNum }) => {
  return (
    <Form.Check onClick={() => checkAnswer(answer)} type={singleOrMultiple} id={answer} name={question} label={answer} />
  )
}

export default Options
