import React from 'react'
import Topbar from './Topbar';
import { GiSeedling } from "@react-icons/all-files/gi/GiSeedling";
import {FaAward} from "@react-icons/all-files/fa/FaAward";
import aboutimg from '../Images/team-1.jpg';
import Footer from './Footer';
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook.esm";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill.esm";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare.esm";
import { Link } from 'react-router-dom';
import farmer1 from '../Images/farmer1.png';
import farmer2 from '../Images/farmer2.png';
import farmer3 from '../Images/farmer3.png';
import NavBar from '../NavBarContainer/NavBar';

function AboutUsPage() {
  return (
    <div>
      <Topbar/>
      <NavBar/>
      {/* <!-- Hero Start --> */}
    <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-info mb-md-5"><b>About Us</b></h1>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}
        {/* <!-- About Start --> */}
        <div className="container-fluid bg-info about py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4 bg">
                        <img className="img-fluid mt-auto mx-auto" src={aboutimg} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                    <h5 className="text-uppercase text-primary"><b>About Us</b></h5>
                        <h1 className="display-5"><b>We Produce Organic Food For Your Family</b></h1>
                    </div>
                    <p className="mb-8">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                            <GiSeedling size={150}/>
                            <h4>100% Organic</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className="col-sm-6">
                            <FaAward size={150}/>
                            <h4>Award Winning</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */} 
     {/* <!-- Team Start --> */}
     <div className="container-fluid bg-warning py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{maxWidth:'500px'}}>
                <h5 className="text-primary text-uppercase"><b>The Team</b></h5>
                <h1 className="display-5"><b>We Are Professional Organic Farmers</b></h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src={farmer1} alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{background:'rgba(52, 173, 84, .85)'}}>
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-primary py-5">
                                <Link  to='/'><AiFillTwitterCircle size={50} className="text-light"/></Link>
                                <Link  to='/'><FaFacebook size={50} className="text-light"/></Link>
                                <Link  to='/'><RiWhatsappFill size={50} className="text-light"/></Link>
                                <Link  to='/'><FaInstagramSquare size={50} className="text-light"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src={farmer2} alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{background:'rgba(52, 173, 84, .85)'}}>
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-primary py-5">
                            <Link  to='/'><AiFillTwitterCircle size={50} className="text-light"/></Link>
                                <Link  to='/'><FaFacebook size={50} className="text-light"/></Link>
                                <Link  to='/'><RiWhatsappFill size={50} className="text-light"/></Link>
                                <Link  to='/'><FaInstagramSquare size={50} className="text-light"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src={farmer3} alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{background:'rgba(52, 173, 84, .85)'}}>
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-primary py-5">
                            <Link  to='/'><AiFillTwitterCircle size={50} className="text-light"/></Link>
                                <Link  to='/'><FaFacebook size={50} className="text-light"/></Link>
                                <Link  to='/'><RiWhatsappFill size={50} className="text-light"/></Link>
                                <Link  to='/'><FaInstagramSquare size={50} className="text-light"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}
    <Footer/>
    </div>
  )
}

export default AboutUsPage
