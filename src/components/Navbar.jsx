import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="fs-1 fst-italic " href="#home" >Foodizz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link active href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/createuser">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

export default MyNavbar;