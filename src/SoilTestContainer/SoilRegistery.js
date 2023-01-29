import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavBar from '../navbsrcontainer/NavBar';

const SoilRegistery = () => {

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [email_id, setEmail] = useState("");
  const [pincode, setPinCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var box = false;

  const handleCkeck = () => {
       box = true;
  };
  
  const soil_register = () => { 
      setValidated(true);
          if(name.length !== 0) {
              if(address.length !== 0) {
                  if(pincode.length === 6) {
                      if(phonenumber.length === 10) {
                          if(mail.test(email_id)===true) {
                              if(box === true) {
                                  dispatch({
                                            type : 'SOILTEST_REGISTER',
                                            payload : {
                                                        id : (new Date()).getTime(),
                                                        name, 
                                                        address,
                                                        pincode,
                                                        phonenumber,
                                                        email_id
                                            }
                                  })
                                alert("Successfully Registered");
                                navigate('/');   
                              }else{
                                alert("Check the Box to register");
                                document.querySelector('#check').focus();
                              }
                          }else {
                            document.querySelector('#email').focus();
                          }
                      }else {
                        alert("please povide the valid mobile number!");
                        document.querySelector('#mobile').focus();
                      }
                  }else {
                    alert("Please enter the proper pin code !!");
                    document.querySelector('#pin').focus();
                  }
              }else {
                document.querySelector('#city').focus();
              }
          }else {
            document.querySelector('#name').focus();
          }
  }
  return (
    <div>
      <NavBar/>
      <div className='nav'>
    <div className='container'>
        <Card className='cards'>
        <Card.Header as="h5">SOILTEST-REGISTERATION</Card.Header>
        <Card.Body>
            <Card.Title>Registeration Form</Card.Title>
            <Card.Text>
            Please provide your valid details to Soil-Test.
            </Card.Text>
            <Form noValidate validated={validated} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            id='name'
            placeholder="Name"
            value={name} onChange={(event) => setName(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="City"
            id='city'
            value={address} onChange={(event) => setAddress(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>PinCode</Form.Label>
          <Form.Control type="number" placeholder="PinCode" id='pin'
          value={pincode} onChange={(event) => setPinCode(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid PinCode.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group as={Col} md="4" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="MobileNumber" id='mobile'
          value={phonenumber} onChange={(event) => setPhone(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid MobileNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
        <Form.Label>Email address</Form.Label>
        <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id='email'
              aria-describedby="inputGroupPrepend"
              value={email_id} onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Mail Adddress.
            </Form.Control.Feedback>
          </InputGroup>
      </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          onChange={handleCkeck}
          id='check'
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <Form.Label>
        We'll never share your details with anyone else.
        </Form.Label>
      </Form.Group>
      
      <Button type="button" onClick={soil_register}>Register</Button>
    </Form>
        </Card.Body>
        </Card>
    </div>
    </div>
    </div>
  )
}

export default SoilRegistery
