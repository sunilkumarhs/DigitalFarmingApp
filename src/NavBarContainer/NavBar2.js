import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../Images/main_images/farmerlogo1.png';

function NavBar2() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" variant="white" bg='info'>
        <Container fluid>
<Nav.Link href='/'><Navbar.Brand><img src={logo} alt=""/></Navbar.Brand></Nav.Link>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
          <Nav.Link href='/SoilTestPage' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>Soil Testing</Navbar.Brand></Nav.Link>
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
          <Nav.Link href='/AboutUsPage' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>About Us</Navbar.Brand></Nav.Link>
          </Nav>
          <Nav className="me-auto">
          <Nav.Link href='/Services' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>Services</Navbar.Brand></Nav.Link>
          </Nav>
          <Nav className="me-auto">
          <Nav.Link href='/Contact' style={{textDecoration:'none'}}><Navbar.Brand style={{fontSize:'1.5rem'}}>Contact</Navbar.Brand></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar2
