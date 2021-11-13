import React, { useState } from 'react';
import { Container, Form, NavLink,Button, Row, Col, Alert, Spinner,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sign.css';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
const SignIn = () => {
  const [loginData,setLogIndata] = useState({});
  const {signInUsingGoogle} = useAuth();
  const {user,registerUser,isLoading} = useAuth();

  const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        setLogIndata(newLogInData);
  }
  const handleOnSubmit = e =>{
    if (loginData.password !== loginData.password2) {
      alert('Password Missmatch');
      return
    }
    registerUser(loginData.email , loginData.password,loginData.name, history);
    e.preventDefault();
  }

    // redirect
    const location = useLocation();
   const history = useHistory();

   const redirect_uri = location.state?.from || '/';

   const handleGoogleSignIn= () => {
       signInUsingGoogle()
           .then(result => {
               history.push(redirect_uri);
           })
   }

    return (
        <div className="mt-5">
                <Container>
                  <Row>
                  <Col xs={12}>
      <Form onSubmit={handleOnSubmit} className="formctrl mx-auto">
       <h2>Sign In</h2>
      
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control  name="name" onBlur={handleOnBlur} type="text" placeholder="User Name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control  name="email" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
    
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
      
       
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  name="password" onBlur={handleOnBlur} type="password" placeholder="Password" />
    <Form.Label className="mt-4"> Confirm Password</Form.Label>
    <Form.Control  name="password2" onBlur={handleOnBlur} type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="outline-dark" type="submit">
   SignUp
  </Button> <br /> or <br />
  <Button onClick={handleGoogleSignIn} className="mt-3" variant="warning" type="submit">
            SignUp With Google
  </Button>
  <NavLink as={Link} to={"/login"}>
        <h5 className="mb-3 mt-4">Already have Account? Log In</h5> </NavLink>
          </Form>
          {isLoading && <Spinner animation="border" />}



          {user?.email && 
      <Alert className="alertcolor"> User Added Successfully</Alert>}
          </Col>
          </Row>
          </Container>
        </div>
    );
};


export default SignIn;