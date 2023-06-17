import React from 'react'
import {Container, Navbar, Nav } from 'react-bootstrap'
const Footer = () => {
  return <footer>
     <Navbar  bg='dark' variant='dark' expand="lg"  >    
     <Container >
     <Navbar.Toggle aria-controls='basic-navbar-nav' /> 
     <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='footer'>
            <Nav.Link href='/'>  &copy;{new Date().getFullYear()}; ThirdEye limited  </Nav.Link>
           
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar> 
        
       
  </footer>
}

export default Footer
