import React from 'react'

import { Link } from 'react-router-dom'
import { Row, Container } from 'react-bootstrap'
import Instructions from '../components/Instructions'
const HomeScreen = () => {
  return (
    <>

      <Instructions />
      <Container>
        <Row sm={12}>
          <Link to="/start" className="btn btn-dark">Start Quiz</Link>
        </Row>
      </Container>


    </>
  )
}

export default HomeScreen
