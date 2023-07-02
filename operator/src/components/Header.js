import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';



const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand="lg"  >
        <Container >
          <Navbar.Brand herf="/" > <i className='fas fa-eye'></i> Third Eye </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='header'>
            <Nav.Link href='/'> <i className='fas fa-home'></i> Home</Nav.Link>
              <Nav.Link href='/login'> <i className='fas fa-user'></i> LOGIN</Nav.Link>
              <Nav.Link href='/chat'> <i className='fas fa-comment'></i> CHAT </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
