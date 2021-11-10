import React from 'react';
import { Container, Navbar,Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
             <Navbar bg="dark"  collapseOnSelect expand="lg" variant="dark">
    <Container fluid>
    <Navbar.Brand className="fontnav" href="#home">Photosica.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto navlinkfont">
      <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
      <Nav.Link  as={Link} to={"/product"}>Products</Nav.Link>
      <Nav.Link  as={Link} to={"/Contact"}>Contact</Nav.Link>
      <Nav.Link as={Link} to="/manageOrders">Manage All Order</Nav.Link>
      <Nav.Link  as={Link} to={"/login"}>Log In</Nav.Link>
      <Button className="mr-5">Dashboard</Button>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;