import React, { useState, useEffect } from 'react'
import Question from '../components/Question'
import { Container, ProgressBar } from 'react-bootstrap'

const QuizScreen = ({ data }) => {
  const [timer, setTimer] = useState(15)
  const [qNum, setqNum] = useState(0)
  const [progress, setProgress] = useState(0)
  const [givenAns, setGivenAns] = useState('')
  const question = data[qNum]

  //console.log('qNum', qNum);
  //console.log('progress', progress);
  //console.log('givenAns', givenAns);



  useEffect(() => {
    let clear = ''
    const stopWatch = () => {

      clear = setTimeout(() => {
        if (timer <= 0) {
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
        setProgress(0)
        console.log("timer", timer)
        return clearTimeout(clear);
      }
    }
    stopWatch()
  }, [timer, givenAns])
  return (
    <div>
      <Container className=" my-2 text-center">
        <h3>Timer:- 00 : {timer}</h3>
      </Container>
      {

        question ? <Question {...question} givenAns={(ans) => { setGivenAns(ans) }} progress={progress} qNum={qNum} /> : null

      }


    </div>
  )
}

export default QuizScreen
