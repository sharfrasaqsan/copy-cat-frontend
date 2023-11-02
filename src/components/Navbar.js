import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/your-logo.png" // Replace with your logo image URL
            height="30"
            className="d-inline-block align-top"
            alt="Copy Cat"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <NavDropdown title="AI Generators" id="ai-generators-dropdown">
              <NavDropdown.Item href="#generator1">
                Generator 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#generator2">
                Generator 2
              </NavDropdown.Item>
              {/* Add more AI generator items as needed */}
            </NavDropdown>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
