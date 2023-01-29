import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SoilTestNavBar() {
  return (
    <div style={{fontSize:'1.5rem'}}>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/SoilTestPage" className='snav'>Home</Nav.Link>
            <NavDropdown title="About US" id="basic-nav-dropdown" className='snav'>
              <NavDropdown.Item href="/AboutUs" style={{fontSize:'1.5rem'}}>About Us</NavDropdown.Item>
              <NavDropdown.Item href="/OurMathods" style={{fontSize:'1.5rem'}}>Our Mathods</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Testing Services" id="basic-nav-dropdown" className='snav'>
              <NavDropdown.Item href="/LawnGarden" style={{fontSize:'1.5rem'}}>Lawn & Garden</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:'1.5rem'}}>Prpfessional/Commercial Lawn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>Farm/Horticultural Field</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>GreenHouse, Florist, and Nursery Tests</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>Agricultural Liming Materials</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"style={{fontSize:'1.5rem'}}>Soluble Salts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="UnderStanding Your Reports" id="basic-nav-dropdown" className='snav'>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>Overviews</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"style={{fontSize:'1.5rem'}}>Definitions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>Agronomic Crops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>Horticultural Crops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'1.5rem'}}>Lawn, Garden and Landscape Plants</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/PdfDisplayPage' className='snav'>Soil-Test Report</Nav.Link>
            <Nav.Link href="/SoilTestPage" className='snav'>FAQS</Nav.Link>
            <Nav.Link href="/SoilTestPage" className='snav'>Contact Us</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default SoilTestNavBar
