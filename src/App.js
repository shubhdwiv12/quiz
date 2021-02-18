import React, { useState, useEffect } from 'react'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import QuizScreen from './screens/QuizScreen'
import ResultScreen from './screens/ResultScreen'
import { Route } from 'react-router-dom'
const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const getData = await fetch('https://quizapi.io/api/v1/questions', {
        method: "GET",
        headers: {
          'X-Api-Key': 'uMtaaHXLUfy3dejO6angydbgaDTEGAypH7RGNcGK'
        }
      })
      const res = await getData.json()
      let singleQuestions = await res.filter((q) => q.multiple_correct_answers === 'false')
      singleQuestions = singleQuestions.splice(0, 5);
      console.log("single", singleQuestions)
      setData(singleQuestions)
    }
    getData()
  }, [])
  return (
    <>
      <Header />
      {data.length > 0 ? <Route path="/" component={HomeScreen} exact /> : null}
      <Route path="/start" render={() => (
        <QuizScreen data={data} />
      )} />
      <Route path="/result" component={ResultScreen} />
    </>
  )
}

export default App;
