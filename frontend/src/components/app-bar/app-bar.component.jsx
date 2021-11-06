import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppBar = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Nav className="me-auto" activeKey="#home">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
export default AppBar;
