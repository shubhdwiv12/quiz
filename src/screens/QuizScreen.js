import React, { useState, useEffect } from 'react'
import Question from '../components/Question'
import { Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
const QuizScreen = ({ data }) => {
  let history = useHistory()
  const [timer, setTimer] = useState(15)
  const [qNum, setqNum] = useState(0)
  const [progress, setProgress] = useState(0)
  const [givenAns, setGivenAns] = useState('')
  const [givenAnsInWords, setGivenAnsInWords] = useState([])
  const [marks, setMarks] = useState([])
  const question = data[qNum]
  let correctAnswer = '';
  let finalAnswer = '';

  //console.log('qNum', qNum);
  //console.log('progress', progress);
  //console.log('givenAns', givenAns);
  if ((qNum + 1) <= data.length) {
    correctAnswer = Object.keys(question.correct_answers).filter((ans) => question.correct_answers[ans] === 'true' ? ans : null)
    //const correctAnswer2 = correctAnswer1[0].splice(0, 7)
    finalAnswer = question.answers[correctAnswer[0].split('').splice(0, 8).join('')]
  }
  else {

  }



  useEffect(() => {
    let clear = ''
    const stopWatch = () => {

      clear = setTimeout(() => {
        //if (timer === 0) {
        //  setMarks(old => [...old, 0])

        //}
        if (timer < 1) {
          setqNum((num) => num + 1)
          setTimer(15);
          setProgress(0);
          return clearTimeout(clear)
        }
        setTimer((time) => time - 1);
        setProgress((progress) => progress + 7)
      }, 1000)
    }

    if (givenAns) {

      return () => {
        setGivenAns('')
        setTimer('');

        return clearTimeout(clear);
      }
    }
    if (qNum >= data.length) {
      history.push({
        pathname: '/result',
        state: { result: marks, allQuestions: data, givenAnswers: givenAnsInWords }
      });
      return () => clearTimeout(clear)
    }
    stopWatch()


  }, [timer, givenAns])


  const checkAnswer = async (answer) => {
    setGivenAnsInWords([...givenAnsInWords, answer])

    setGivenAns(answer)
    if (answer === finalAnswer) {


      setMarks((old) => [...old, 10])
    }
    else {
      setMarks((old) => [...old, 0])

    }
  }


  return (
    <div>
      <Container className=" my-2 text-center">
        <h3>Timer:- 00 : {timer}</h3>
      </Container>
      {

        question ? <Question {...question} checkAnswer={checkAnswer} progress={progress} qNum={qNum} /> : null

      }


    </div>
  )
}

export default QuizScreen
