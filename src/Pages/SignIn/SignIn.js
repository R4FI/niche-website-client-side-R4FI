import React from 'react';
import { Container, Form, NavLink,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SignIn = () => {
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
   SignUp
  </Button> <br /> or <br />
  <Button className="mt-3" variant="warning" type="submit">
            SignUp With Google
  </Button>
  <NavLink as={Link} to={"/login"}>
        <h5 className="mb-3 mt-4">Already have Account? Log In</h5> </NavLink>
          </Form>
          </Container>
        </div>
    );
};

export default SignIn;