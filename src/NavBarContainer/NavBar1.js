import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook.esm";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill.esm";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare.esm";
import logo from '../Images/main_images/farmerlogo.png';

const NavBar1 = () => {
  return (
    <div>
     
       <Navbar collapseOnSelect expand="lg" variant="white"  bg='primary'>
        <Container fluid> 
      <Link to='/'><Navbar.Brand><img src={logo} alt=""/></Navbar.Brand></Link>
       <div className="d-flex align-items-center justify-content-end">
                <Link  to='/'><AiFillTwitterCircle size={50} className="text-white   me-3 "/></Link>
                <Link  to='/'><FaFacebook size={50} className="text-white me-3"/></Link>
                <Link  to='/'><RiWhatsappFill size={50} className="text-white me-3"/></Link>
                <Link  to='/'><FaInstagramSquare size={50} className="text-white me-3"/></Link>
                </div>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default NavBar1
