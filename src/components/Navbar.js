import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3">
      <Navbar.Brand as={Link} to="/"> 
        <img src="/logo.png" alt="Auction App" style={{ height: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Form className="d-flex mx-auto" style={{ width: "50%" }}>
          <FormControl type="search" placeholder="Search auctions..." className="me-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/auctions">Browse Auctions</Nav.Link>
          <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
