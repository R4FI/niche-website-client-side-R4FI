import React from 'react';
import { Container, Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user,logout} = useAuth();
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
      {
        user?.email ?
        
       <Nav.Link as={Link} to="/dashboard">Dashboard
        <button
        onClick={logout}
        className="btn btn-secondary me-2">LogOut</button>
       </Nav.Link>:
       
          
          <Nav.Link  as={Link} to={"/login"}>Log In</Nav.Link>
      }
        <Navbar.Text>
                            {user?.email &&
                                <span className="me-2">Profile: <a href="#login">{user?.displayName}</a></span>
                            }
                            <span><img className="profile" src={user?.photoURL} alt="" /></span>

                        </Navbar.Text>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;