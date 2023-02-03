import React,{useState} from 'react'
import Footer from './Footer'
import Topbar from './Topbar'
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBarContainer/NavBar';


function Contact() {
    const [name, setName] = useState();
    const [email, setMail] = useState();
    const [subject, setSubject] = useState();
    const [content, setContent] = useState();
    const navigate = useNavigate();
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const queryCollectionRef = collection(db, "queries");

    const post = async () => {
        if(name.length !== 0 && subject.length !== 0 && content.length !== 0 ) {
            if(mail.test(email)===true) {
                await addDoc(queryCollectionRef, {Name: name, Email: email, Subject: subject, Content: content});
            alert("Sent sucessfully");
            navigate('/');
            } else {
                alert("enter the proper email");
            }
        } else {
            alert("Provide the required field details!!")
        }
    }

  return (
    <div>
      <Topbar/>
      <div>
        <NavBar/>
      </div>
      {/* <!-- Contact Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-3" style={{maxWidth: '500px'}}>
                <h1 className="text-primary text-uppercase"><b>Contact Us</b></h1>
                <h1 className="display-3"><b>Please Feel Free To Contact Us</b></h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-7">
                    <div className="bg-primary h-100 p-5">
                    {/* <form onSubmit={post}> */}
                            <div className="row g-3"> 
                                <div className="col-6">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" onChange={(event) => {setName(event.target.value);}} style={{height: '55px'}}/>
                                </div>
                                <div className="col-6">
                                    <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" onChange={(event) => {setMail(event.target.value);}} style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Subject" onChange={(event) => {setSubject(event.target.value);}} style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <textarea  className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message" onChange={(event) => {setContent(event.target.value);}} ></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" onClick={post} >Submit Message</button>
                                    {/* <input className="btn btn-secondary w-100 py-3" type="submit" value="Submit Message" /> */}
                                </div>
                            </div>
                        {/* </form>  */}
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-secondary h-100 p-5">
                        <h2 className="text-white mb-4">Get In Touch</h2>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center " style={{width: '60px', height: '60px'}}>
                                <i className="bi bi-geo-alt fs-1 "></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Our Office</h5>
                                <span className="text-white">123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center" style={{width: '60px', height: '60px'}}>
                                <i className="bi bi-envelope-open fs-1"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Email Us</h5>
                                <span className="text-white">info@example.com</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="bg-primary rounded-circle d-flex align-items-center" style={{width: '60px', height: '60px'}}>
                                <i className="bi bi-phone-vibrate fs-1"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Call Us</h5>
                                <span className="text-white">+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
    <Footer/>
    </div>
  )
}

export default Contact
