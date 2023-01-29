import React from 'react';
import SoilTestNavBar from '../NavBarContainer/SoilTestNavBar';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
       <div>
       <Navbar collapseOnSelect expand="lg" variant="white"  bg='success'>
        <Container fluid>
        <a href='/SoilTestPage' style={{textDecoration:'none'}}><Navbar.Brand><b style={{color:'red', fontSize:'2rem'}}>Soil Test Laboratory</b></Navbar.Brand></a>
        </Container>
      </Navbar>
      <Outlet/>
      </div>
      <div>
        <SoilTestNavBar/>
      </div>
    </div>
  )
}

export default Header
