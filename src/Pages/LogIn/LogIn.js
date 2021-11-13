import React, { useState } from 'react';
import { Container, Form,Button, NavLink, Alert } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './LogIn.css';
const LogIn = () => {

  const [loginData,setLogIndata] = useState({});
  const { user, loginUser} = useAuth();


  const location = useLocation();
  const history = useHistory();


  const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        setLogIndata(newLogInData);
  }
  const handleLoginOnSubmit = e =>{
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();

  }
   
    return (
        <div>
          <Container className="mt-5">
          <Form onSubmit={handleLoginOnSubmit} className="formctrl mx-auto">
          <h2>Log In</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  name="email" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  name="password" onBlur={handleOnBlur} type="password" placeholder="Password" />
  </Form.Group>
  <Button  variant="outline-dark" type="submit">
   Log In
  </Button>

  <NavLink as={Link} to={"/signIn"}>
        <h5 className="mb-3 mt-4">New User?Please SignIn</h5> </NavLink>
          </Form>
          {user?.email && <Alert severity="success">Login successfully!</Alert>}
        </Container>
        </div>
    );
};

export default LogIn;