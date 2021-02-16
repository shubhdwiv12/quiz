import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
const Options = ({ answer, givenAns, correct_answer, question, singleOrMultiple, qNum }) => {
  const [givenAnswer, setGivenAnswer] = useState('')
  return (
    <Form.Check onClick={() => givenAns(answer)} type={singleOrMultiple} id={answer} name={question} label={answer} />
  )
}

export default Options
