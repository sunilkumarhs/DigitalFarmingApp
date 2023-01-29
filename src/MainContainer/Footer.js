import React from 'react';
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook.esm";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill.esm";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare.esm";
import {ImLocation2} from "@react-icons/all-files/im/ImLocation2.esm";
import {FaMailBulk} from "@react-icons/all-files/fa/FaMailBulk.esm";
import {IoIosCall} from "@react-icons/all-files/io/IoIosCall.esm";
import {FaArrowAltCircleRight} from "@react-icons/all-files/fa/FaArrowAltCircleRight.esm";
import {FcHome} from "@react-icons/all-files/fc/FcHome.esm";
import {FcAbout} from "@react-icons/all-files/fc/FcAbout.esm";
import {FcServices} from "@react-icons/all-files/fc/FcServices.esm";
import {FcConferenceCall} from "@react-icons/all-files/fc/FcConferenceCall.esm";
import {FcWikipedia} from "@react-icons/all-files/fc/FcWikipedia.esm";
import {FcContacts} from "@react-icons/all-files/fc/FcContacts.esm";

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
                                <p className="text-white mb-0"> &nbsp; 123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex mb-3">
                                <FaMailBulk size={30}/>
                                <p className="text-white mb-0">&nbsp; info@example.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <IoIosCall size={30}/>
                                <p className="text-white mb-0">&nbsp; +012 345 67890</p>
                            </div>
                            <div className="d-flex mt-4 ">
                            <a className='px-3' href='/'><AiFillTwitterCircle size={40} className="text-light"/></a>
                                <a className='px-3' href='/'><FaFacebook size={40} className="text-light"/></a>
                                <a className='px-3' href='/'><RiWhatsappFill size={40} className="text-light"/></a>
                                <a className='px-3' href='/'><FaInstagramSquare size={40} className="text-light"/></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 pt-0 pt-lg-4 mb-4 px-5">
                            <h4 className="text-white mb-4 ">Popular as</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href='/' style={{textDecoration:'none'}}><FaArrowAltCircleRight className='me-3' size={30}/><FcHome size={30}/> Home</a>
                                <a className="text-white mb-2" href='/AboutUsPage' style={{textDecoration:'none'}}><FaArrowAltCircleRight className='me-3' size={30}/><FcAbout size={30}/> About Us</a>
                                <a className="text-white mb-2" href='/Services' style={{textDecoration:'none'}}><FaArrowAltCircleRight className='me-3' size={30}/><FcServices size={30}/> Our Services</a>
                                <a className="text-white mb-2" href='/' style={{textDecoration:'none'}}><FaArrowAltCircleRight className='me-3' size={30}/><FcConferenceCall size={30}/> Meet The Team</a>
                                <a className="text-white mb-2" href='/' style={{textDecoration:'none'}}><FaArrowAltCircleRight className='me-3' size={30}/><FcWikipedia size={30}/> Latest Blog</a>
                                <a className="text-white mb-2" href='/Contact' style={{textDecoration:'none'}}><FaArrowAltCircleRight className='me-3' size={30}/><FcContacts size={30}/> Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-n5">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-danger p-5">
                        <h2 className="text-white">Newsletter</h2>
                        <h4 className="text-white">Subscribe Our Newsletter</h4>
                        <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
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
