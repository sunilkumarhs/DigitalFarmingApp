import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook.esm";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill.esm";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare.esm";



function Topbar() {

  return (
    <div>
      <div className="container-fluid px-5 d-none d-lg-block bg-success">
        <div className="row gx-5 py-3 align-items-center">
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-start">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                    <h2 className="mb-0">+012 345 6789</h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center">
                        <h1 className="m-0 display-4 text-danger"><span className="text-warning"><b>Digital</b></span><b>Farming</b></h1>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-end">
                <Link  to='/'><AiFillTwitterCircle size={50} className="text-white bg-primary me-3 "/></Link>
                <Link  to='/'><FaFacebook size={50} className="text-white bg-primary me-3"/></Link>
                <Link  to='/'><RiWhatsappFill size={50} className="text-white bg-primary me-3"/></Link>
                <Link  to='/'><FaInstagramSquare size={50} className="text-white bg-primary me-3"/></Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Topbar
