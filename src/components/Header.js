import React from 'react'
import { Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar className="justify-content-sm-center" collapseOnSelect bg="dark" variant="dark">
        <h2 className="text-white">WebNyay Quiz</h2>
      </Navbar>
    </header>
  )
}

export default Header
