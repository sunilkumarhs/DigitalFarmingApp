import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../Images/main_images/farmerlogo1.png';
// import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const NavBar = () => {
  const [user, setUser] = useState({});
  // const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  })

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="white" bg='info'>
        <Container fluid>
<a href='/'><Navbar.Brand><img src={logo} alt=""/></Navbar.Brand></a>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
          <a href='/SoilTestPage' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>Soil Testing</Navbar.Brand></a>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Fertilizers"
              menuVariant="dark"
            >
              <NavDropdown.Item href=""><Button>Fertilizers info</Button></NavDropdown.Item>
              <NavDropdown.Item href=""><Button>Fertilizers Stock Position</Button></NavDropdown.Item>
              <NavDropdown.Item href=""><Button>Fertilizers Price</Button></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=""><Button>Fertilizers Retailers</Button></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
          <a href='/AboutUsPage' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>About Us</Navbar.Brand></a>
          </Nav>
          <Nav className="me-auto">
          <a href='/Services' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>Services</Navbar.Brand></a>
          </Nav>
          <Nav className="me-auto">
          <a href='/Contact' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>Contact</Navbar.Brand></a>
          </Nav>
        </Navbar.Collapse>
        {user?.email}
        <Form className="d-flex" role="login">
              {
                user
                ? <a href='/'><Button id="login" variant="outline-danger" onClick={logout}>LOGOUT</Button></a>
                : <a href='/FarmLogin'><Button id="login" variant="outline-success">LOGIN</Button></a>
            }
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
