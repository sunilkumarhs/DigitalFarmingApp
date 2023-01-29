import React from 'react'
import Topbar from './Topbar';
import client from '../Images/user.jpg';
import {FaCarrot} from "@react-icons/all-files/fa/FaCarrot";
import {GiFruitBowl} from "@react-icons/all-files/gi/GiFruitBowl";
import {GiCow} from "@react-icons/all-files/gi/GiCow";
import {GiFarmTractor} from "@react-icons/all-files/gi/GiFarmTractor";
import {GiFarmer} from "@react-icons/all-files/gi/GiFarmer";
import Footer from './Footer';
import {GiPlantRoots} from "@react-icons/all-files/gi/GiPlantRoots";
// import service from '../Images/services.jpg'
import NavBar from '../NavBarContainer/NavBar';

function Services() {
  return (
    <div>
      <Topbar/>
      <NavBar/>
      {/* <!-- Hero Start --> */}
    <div className="container-fluid bg-primary py-5 bg-service mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-4 text-white mb-md-5"><b>Our Services</b></h1>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}
    {/* <!-- Services Start --> */}
    <div className="container-fluid py-1">
        <div className="container">
            <div className="mb-5">
                <h5 className="text-uppercase text-info"><b>Services</b></h5>
                <h1 className="display-1"><b>Organic Farm Services</b></h1>
                <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit sed stet labore</p>
                </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <GiPlantRoots size={150} />
                        <h4>Soil Tesing</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <FaCarrot size={150}/>
                        <h4>Fresh Vegetables</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <GiFruitBowl size={150} />
                        <h4>Fresh Fruits</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <GiCow size={150}/>
                        <h4>Healty Cattle</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <GiFarmTractor size={150} />
                        <h4>Modern Machines</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <GiFarmer size={150} />
                        <h4>Farming Plans</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}
     {/* <!-- Testimonial Start --> */}
     <div className="container-fluid bg-testimonial py-5 my-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel p-5">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src={client} alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}
    <Footer/>
    </div>
  )
}

export default Services
