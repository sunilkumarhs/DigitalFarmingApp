import React from 'react';
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook.esm";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill.esm";
import {ImLocation2} from "@react-icons/all-files/im/ImLocation2.esm";
import {FaMailBulk} from "@react-icons/all-files/fa/FaMailBulk.esm";
import {IoIosCall} from "@react-icons/all-files/io/IoIosCall.esm";

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-footer bg-primary text-white mt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5 me-5">
                            <h4 className="text-white mb-4">Get In Touch</h4>
                            <div className="d-flex mb-3">
                                <ImLocation2 size={30}/>
                                <p className="text-white mb-0"> &nbsp; <b>123 Street, New York, USA</b></p>
                            </div>
                            <div className="d-flex mb-3">
                                <FaMailBulk size={30}/>
                                <p className="text-white mb-0">&nbsp; &nbsp;<a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'"><b style={{color:'white', fontSize:'1.2rem'}}>soiltest@ind.in</b></a></p>
                            </div>
                            <div className="d-flex mb-2">
                                <IoIosCall size={30}/>
                                <p className="text-white mb-0">&nbsp; <b>+012 345 67890</b></p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 pt-0 pt-lg-4 mb-4 px-5">
                            <h4 className="text-white mb-2 ">Office Hours:</h4>
                            <div className="d-flex flex-column justify-content-start">
                            <p style={{fontSize:'1.2rem',margin:'0rem'}}>Monday - Friday </p>
                            <p style={{fontSize:'1.2rem'}}>8:00 am to 4:30 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-n5">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-warning p-5">
                        <h1 className="text-white"><b>UFANS</b></h1>
                        <h6 className="text-white">UNIVERSITY OF FOOD, AGRICULTURE AND NATURAL RESOURCE SCIENCES</h6>
                        <div className="d-flex mt-4 ">
                            <a className='px-3' href='/SoilTestMainPage'><AiFillTwitterCircle size={40} className="text-light"/></a>
                                <a className='px-3' href='/SoilTestMainPage'><FaFacebook size={40} className="text-light"/></a>
                                <a className='px-3' href='/SoilTestMainPage'><RiWhatsappFill size={40} className="text-light"/></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
            <p className="mb-0">&copy;  2023 DigitalFarming. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
 