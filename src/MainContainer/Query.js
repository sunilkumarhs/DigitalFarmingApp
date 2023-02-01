import React from 'react'
import { useState } from 'react';
import {addDoc, collection} from 'firebase/firestore';
import { db } from '../firebase';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Topbar from './Topbar';
// import NavBar from '../NavBarContainer/NavBar';
import Footer from './Footer';
import SoilTestNavBar from '../NavBarContainer/SoilTestNavBar';

function Query() {
    const [name, setName] = useState();
    const [email, setMail] = useState();
    const [subject, setSubject] = useState();
    const [content, setContent] = useState();
    const navigate = useNavigate();
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

    const queryCollectionRef = collection(db, "queries");

    const post = async () => {
        if(mail.test(email)===true) {
            await addDoc(queryCollectionRef, {Name: name, Email: email, Subject: subject, Content: content});
        alert("Sent sucessfully");
        navigate('/');
        } else {
            alert("enter the proper email");
        }
        
    }
  return (
    <div>
        <Topbar/>
        <div>
        {/* <NavBar/> */}
        <SoilTestNavBar/>
        </div>

<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="name@example.com"  onChange={(event) => {setName(event.target.value);}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  onChange={(event) => {setMail(event.target.value);}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="name@example.com"  onChange={(event) => {setSubject(event.target.value);}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(event) => {setContent(event.target.value);}} />
      </Form.Group>
    </Form>
    <Button type="button" onClick={post}>Submit</Button>
        {/* <form onSubmit={post}>
        <input type="text" onChange={(event) => {setName(event.target.value);}} placeholder="name"/>
        <input type="email" placeholder="Your Email" onChange={(event) => {setMail(event.target.value);}} />
        <input type="text"  placeholder="Subject" onChange={(event) => {setSubject(event.target.value);}} />
        <textarea  rows="2" placeholder="Message"  onChange={(event) => {setContent(event.target.value);}} ></textarea>
        <button className="btn btn-secondary w-100 py-3" type='submit'>Submit Message </button>
        </form>    */}
        <Footer/>
    </div>
  )
}

export default Query
