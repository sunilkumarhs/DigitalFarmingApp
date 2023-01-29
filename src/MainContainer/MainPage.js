import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import FirstImage from '../Images/main_images/image1.jpg';
import SecondImage from '../Images/main_images/image2.png';
import ThirdImage from '../Images/main_images/image3.jpg';
import FourthImage from '../Images/main_images/image4.png';
import FifthImage from '../Images/main_images/image5.png';
import aboutimg from '../Images/team-1.jpg';
import client from '../Images/user.jpg';
import featur from '../Images/feature.png';
import farmer1 from '../Images/farmer1.png';
import farmer2 from '../Images/farmer2.png';
import farmer3 from '../Images/farmer3.png';
import blog1 from '../Images/blog-1.jpg';
import blog2 from '../Images/blog-2.jpg';
import blog3 from '../Images/blog-3.jpg';
import { GiSeedling } from "@react-icons/all-files/gi/GiSeedling";
import {FaAward} from "@react-icons/all-files/fa/FaAward";
import {FaCarrot} from "@react-icons/all-files/fa/FaCarrot";
import {GiFruitBowl} from "@react-icons/all-files/gi/GiFruitBowl";
import {GiCow} from "@react-icons/all-files/gi/GiCow";
import {GiFarmTractor} from "@react-icons/all-files/gi/GiFarmTractor";
import {GiFarmer} from "@react-icons/all-files/gi/GiFarmer";
import {GiPlantRoots} from "@react-icons/all-files/gi/GiPlantRoots";
import {FiPhoneCall} from "@react-icons/all-files/fi/FiPhoneCall.esm";
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle.esm";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook.esm";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill.esm";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare.esm";
import Topbar from './Topbar';
import Footer from './Footer';
import Banner from './Banner';
import NavBar from '../NavBarContainer/NavBar';


const MainPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div> 
        <Topbar/>
      <NavBar/>    
    <div className='section'>    
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstImage}
            alt="First slide"
            style={{height:'25rem'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondImage}
            alt="Second slide"
            style={{height:'25rem'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdImage}
            alt="Third slide"
            style={{height:'25rem'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FourthImage}
            alt="Fourth slide"
            style={{height:'25rem'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FifthImage}
            alt="Fifth slide"
            style={{height:'25rem'}}
          />
        </Carousel.Item>
      </Carousel>
    </div>
     <Banner/>
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

    {/* <!-- Services Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="mb-3">
                    <h5 className="text-uppercase text-info"><b>Services</b></h5>
                        <h1 className="display-5"><b>Organic Farm Services</b></h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit sed stet labore</p>
                    {/* <a href="" className="btn btn-primary py-md-3 px-md-5">Contact Us</a> */}
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
    {/* <!-- Features Start --> */}
    <div className="container-fluid bg-primary feature ">
        <div className="container py-3 pb-lg-5">
            <div className="mx-auto text-center mb-2 pb-2" style={{maxWidth:'500px'}}>
                <h5 className="text-uppercase text-warning"><b>Features</b></h5>
                <h1 className="display-5 text-white"><b>Why Choose Us!!!</b></h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-3">
                    <div className="text-white mb-5">
                        <div className="bg-info rounded-pill d-flex align-items-center justify-content-center mb-2" style={{width:'80px',height:'80px'}}>
                            <GiPlantRoots size={60}/>
                        </div>
                        <h4 className="text-white">100% Organic</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                    <div className="text-white">
                        <div className="bg-info rounded-pill d-flex align-items-center justify-content-center mb-2" style={{width:'80px',height:'80px'}}>
                        <FaAward size={60}/>
                        </div>
                        <h4 className="text-white">Award Winning</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-block bg-warning h-100 text-center p-4 pb-lg-0">
                        <p>At et justo elitr amet sea at. Magna et sit vero at ipsum sit et dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita, vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor</p>
                        <img className="img-fluid" src={featur}alt=""/>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-white mb-5">
                        <div className="bg-info rounded-pill d-flex align-items-center justify-content-center mb-2" style={{width:'80px',height:'80px'}}>
                        <GiFarmTractor size={60} />
                        </div>
                        <h4 className="text-white">Modern Farming</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                    <div className="text-white">
                        <div className="bg-info rounded-pill d-flex align-items-center justify-content-center mb-2" style={{width:'80px',height:'80px'}}>
                            <FiPhoneCall size={60}/>
                        </div>
                        <h4 className="text-white">24/7 Support</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Features Start --> */}
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
    {/* <!-- Blog Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{maxWidth:'500px'}}>
                <h5 className="text-primary text-uppercase"><b>Our Blog</b></h5>
                <h1 className="display-5"><b>Latest Articles From Our Blog Post</b></h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="blog-item position-relative overflow-hidden">
                        <img className="img-fluid" src={blog1} alt=""/>
                        <Link className="blog-overlay" to="/">
                            <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span className="text-white fw-bold">Jan 01, 2023</span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-item position-relative overflow-hidden">
                        <img className="img-fluid" src={blog2} alt=""/>
                        <Link className="blog-overlay" to="/">
                            <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span className="text-white fw-bold">Jan 01, 2023</span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-item position-relative overflow-hidden">
                        <img className="img-fluid" src={blog3} alt=""/>
                        <Link className="blog-overlay" to="/">
                            <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span className="text-white fw-bold">Jan 01, 2023</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}
    <Footer/>
    </div>
    </>  
  )
}

export default MainPage
