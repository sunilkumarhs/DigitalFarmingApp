import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavBar1 from '../NavBarContainer/NavBar1';
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../firebase';

function BuyersDetailsPage() {
    const [validated, setValidated] = useState(false);
   
    const [cname, setCName] = useState("");
    const [address, setAddress] = useState("");
    const [phonenumber, setPhone] = useState("");
    const [cmail, setMail] = useState("");
    const [pincode, setPinCode] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [types, setTypes] = useState("");
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const buyerCollectionRef = collection(db, "buyers");

    const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleCkeck = () => {
        setAgree(!agree);
    };

    const submit =  async () => { 
        setValidated(true);
            if(types.length !== 0) {
            if(cname.length !== 0) {
                if(address.length !== 0) {
                    if(district.length !== 0) {
                        if(state.length !== 0 ) {
                            if(pincode.length === 6) {
                                if(phonenumber.length === 10) {
                                        if(mail.test(cmail)===true) {
                                                            await addDoc(buyerCollectionRef, {BuyerType: types,
                                                                UserID: auth?.currentUser?.email,
                                                                 CompanyName: cname,
                                                                  CompanyAddress: address,
                                                                  District: district,
                                                                   State: state,
                                                                    PinCode: pincode,
                                                                     ContactNumber: phonenumber,
                                                                      CompanyMail: cmail,
                                                                });
                                                              alert("Successfully Registered");
                                                              navigate('/BuyersPage');   
                                        }else {
                                          alert("Please enter the proper mail address!!");
                                            document.querySelector('#mail').focus();
                                        }
                                }else {
                                  alert("please povide the valid mobile number!");
                                    document.querySelector('#mobile').focus();
                                }
                            }else {
                              alert("Please enter the proper pin code !!");
                                document.querySelector('#pin').focus();
                            }
                        } else {
                            alert("Select your state !!");
                            document.querySelector('#state').focus();
                        }
                    } else {
                        alert("Select the  your district!!")
                        document.querySelector('#dist').focus();
                    }
                }else {
                    document.querySelector('#city').focus();
                }
            }else {
                document.querySelector('#name').focus();
            }
            }else {
                alert("Please select your Registeration type");
                document.querySelector("#type").focus();
            }
        }
  return (
    <div>
      <div>
            <NavBar1 />
        </div>
      <div className='container'>
        <Card className='cards'>
        <Card.Header as="h5">REGISTER</Card.Header>
        <Card.Body>
            <Card.Title>Buyers Infomation Form</Card.Title>
            <Card.Text>
            Please provide your detail to Login.
            </Card.Text>
            <Form noValidate validated={validated} >
             <Row className='mb-3'>   
            <Form.Group as={Col} md="4" >
          <Form.Label>Buyer Type</Form.Label>
          <Form.Select  value={types} onChange={(e) =>setTypes(e.target.value)} id="type" >
            <option value="">Choose..</option>
            <option value="Retailer">Retailer</option>
            <option value="Wholesaler">Wholesaler</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="6">
        <Form.Label>UserID</Form.Label>
        <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              placeholder={auth?.currentUser?.email}
              aria-describedby="inputGroupPrepend"
              disabled
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Mail Adddress.
            </Form.Control.Feedback>
          </InputGroup>
      </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>Company/Shope Name</Form.Label>
          <Form.Control
            required
            type="text"
            id='name'
            placeholder="Name"
            value={cname} onChange={(event) => setCName(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Address of Comapny</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address"
            id='city'
            value={address} onChange={(event) => setAddress(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>District</Form.Label>
          <Form.Select value={district} onChange={(e) =>setDistrict(e.target.value)} id="dist">
            <option value="">Choose..</option>
            <option value="Bengaluru ">Bengaluru </option>
            <option value="Ballari ">Ballari </option>
            <option value="Chikballapur ">Chikballapur  </option>
            <option value="Chitradurga ">Chitradurga </option>
            <option value="Davanagere ">Davanagere </option>
            <option value="Dharwad ">Dharwad </option>
            <option value="Gadag ">Gadag </option>
            <option value="Hassan ">Hassan </option>
            <option value="Haveri  ">Haveri </option>
            <option value="Kodagu  ">Kodagu </option>
            <option value="Kolar ">Kolar</option>
            <option value="Mandya ">Mandya </option>
            <option value="Mysuru ">Mysuru i </option>
            <option value="Raichur ">Raichur  </option>
            <option value="Shivamogga  ">Shivamogga </option>
            <option value="Udupi ">Udupi </option>
          </Form.Select>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group as={Col} md="4" >
          <Form.Label>State</Form.Label>
          <Form.Select  value={state} onChange={(e) =>setState(e.target.value)} id="state" >
            <option value="">Choose..</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Karnataka">Karnataka</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>PinCode</Form.Label>
          <Form.Control type="number" placeholder="PinCode" id='pin'
          value={pincode} onChange={(event) => setPinCode(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid PinCode.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="number" placeholder="MobileNumber" id='mobile'
          value={phonenumber} onChange={(event) => setPhone(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Contact-Number.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>Company Mail-Id</Form.Label>
          <Form.Control type="text" placeholder="Company Mail-ID" id='mail'
          value={cmail} onChange={(event) => setMail(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid mail-id.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          onChange={handleCkeck}
          id='agree'
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <Form.Label>
        We'll never share your details with anyone else.
        </Form.Label>
      </Form.Group>
      <Button disabled={!agree} type="button" onClick={submit}>Submit</Button>
    </Form>
        </Card.Body>
        </Card>
    </div>
    </div>
  )
}

export default BuyersDetailsPage
