import React from 'react';
import { Container, Form,Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LogIn.css';
const LogIn = () => {
    return (
        <div>
          <Container className="mt-5">
          <Form className="formctrl mx-auto">
       
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="outline-dark" type="submit">
   Log In
  </Button>

  <NavLink as={Link} to={"/signIn"}>
        <h5 className="mb-3 mt-4">New User?Please SignIn</h5> </NavLink>
          </Form>
        </Container>
        </div>
    );
};

export default LogIn;