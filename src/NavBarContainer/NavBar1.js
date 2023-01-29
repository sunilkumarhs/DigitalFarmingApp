import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../Images/main_images/farmerlogo.png';

const NavBar1 = () => {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" variant="white"  bg='white'>
        <Container fluid>
        <Link to='/'><Navbar.Brand><img src={logo} alt=""/></Navbar.Brand></Link>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default NavBar1
