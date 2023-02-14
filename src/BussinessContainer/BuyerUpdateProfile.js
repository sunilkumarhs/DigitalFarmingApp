import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {collection, updateDoc, getDocs, doc} from 'firebase/firestore';
import { db, auth} from '../firebase';
import { storage } from '../firebase/index';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { Avatar } from '@mui/material';

function BuyerUpdateProfile() {
    const [buyers, setBuyers] = useState([]);
    const [buyer, setBuyer] = useState([]);
  
      const buyerCollectionRef = collection(db, "buyers");
  
      const user = auth?.currentUser?.email;
  
      useEffect(() => {
        const getBuyers = async () => {
          const data = await getDocs(buyerCollectionRef);
          setBuyers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getBuyers();
      }, [])
  
      useEffect(() => {
        const getFarm = async () => {
          setBuyer(
            buyers.filter(item =>
              Object.values(item)
                .join('')
                .toLowerCase()
                .includes(user.toLowerCase())
            )
          );
        }
        getFarm();
      }, [user, buyers]);
  
      useEffect(() => {
  
      })
      
      const [validated, setValidated] = useState(false);
      var [cname, setName] = useState("");
      var [caddress, setAddress] = useState("");
      var [phonenumber, setPhone] = useState("");
      var [cmail, setMail] = useState("");
      var [pincode, setPinCode] = useState("");
      var [district, setDistrict] = useState("");
      var [state, setState] = useState("");
      var [types, setTypes] = useState("");
      const [file, setFile] = useState(null);
      const [photoUrl, setPhotoUrl] = useState([]);
      const [cType, setCType] = useState(false);
      const [cName, setCName] = useState(false);
      const [cAddress, setCAddress] = useState(false);
      const [cDistrict, setCDistrict] = useState(false);
      const [cState, setCState] = useState(false);
      const [cPincode, setCPincode] = useState(false);
      const [cMobNum, setCMobNum] = useState(false);
      const [cMail, setCMail] = useState(false);
    
      const navigate = useNavigate();
  
      if(file !== null) {
        const proRef = ref(storage, `profile/${auth?.currentUser?.uid}`);
        uploadBytes(proRef, file).then(() => {
          alert("Profile photo uploaded successfully");
          setFile(null);
        })
      }
  
      useEffect(() => {
        const getPhotoUrl = async () => {
          const proRef = ref(storage, "profile/");
          listAll(proRef).then((res) => {
            res.items.forEach((itemRef) => {
              getDownloadURL(itemRef).then((url) => {
                if(url && url.length > 0) {
                  if(itemRef.name === auth?.currentUser?.uid) {
                    setPhotoUrl({
                      url:url
                    });
                  } 
                }
              })
            })
          }) 
        }
        getPhotoUrl();
      }, [])
  
      
  
      const CompanyType = () => {
        setCType(true);
      }
      const CompanyName = () => {
        setCName(true);
      }
      const CompanyAddress = () => {
        setCAddress(true);
      }
      const CompanyDistrict = () => {
        setCDistrict(true);
      }
      const CompanyState = () => {
        setCState(true);
      }
      const  CompanyPinCode = () => {
        setCPincode(true);
      }
      const CompanyMobNum = () => {
        setCMobNum(true);
      }
      const CompanyMail = () => {
        setCMail(true);
      }

      const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  
      const submit =  async (id) => { 
        const BuyUser = doc(db, "buyers", id);
          setValidated(true);
              if(types.length !== 0) {
              if(cname.length !== 0) {
                  if(caddress.length !== 0) {
                      if(district.length !== 0) {
                          if(state.length !== 0) {
                              if(pincode.length === 6) {
                                  if(phonenumber.length === 10) {
                                          if(mail.test(cmail)===true) {
                                                  await updateDoc(BuyUser, {AgricultureType: types,
                                                        UserID: auth?.currentUser?.email,
                                                        CompanyName: cname,
                                                        CompanyAddress: caddress,
                                                        District: district,
                                                        State: state,
                                                        PinCode: pincode,
                                                        ContactNumber: phonenumber,
                                                        CompanyMail: cmail,
                                                      });
                                                  alert("Successfully Registered");
                                                  navigate('/FarmersPage');   
                                          }else {
                                            alert("Please enter the proper Mail-Address");
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
                      alert("Please enter Provide your company address")
                      document.querySelector('#city').focus();
                  }
              }else {
                  alert("Please enter the company name");
                  document.querySelector('#name').focus();
              }
              }else {
                  alert("Please select your Registeration type");
                  document.querySelector("#type").focus();
              }
          }
  
          const LayoutHandler = () => {
              navigate('/BuyersPage');
            }
  
    return (
      <div>
        <div className="container-fluid bg-white about py-3">
         <div className='container'>
          <Card className='cards'>
          <Button type="button" className="btn-close" style={{fontSize:'1.5rem'}} aria-label="Close" onClick={LayoutHandler}></Button>
          <Card.Header as="h1"  style={{textAlign:'center'}}>Buyer-Profile</Card.Header>
          <Card.Body>
              <Card.Title as='h2' style={{textAlign:'center'}}>Profile Update</Card.Title>
              <Card.Text as='h5'  style={{textAlign:'center'}} className='pb-4'>
                If any Changes, Update Here.
              </Card.Text>
              <div className='pb-5' style={{justifyContent: "center", display: "flex"}}>
              <input type="file" id='pho' onChange={(event) => setFile(event.target.files[0])}/>
                    <Avatar
                      id='img'
                      alt="farmer_img"
                      src={photoUrl.url}
                      sx={{ width: 150, height: 150 }}
                    />
              </div>
              <Form noValidate validated={validated} >
              {buyer.map((b) => {
          return(
            <div key={b.id}>
               <Row className='mb-3'>   
              <Form.Group as={Col} md="4" >
            <Form.Label>Buyer Type</Form.Label>
            {
              cType 
              ? <Form.Select  value={types} onChange={(e) =>setTypes(e.target.value)} id="type" >
                  <option value="">choose..</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesaler">Wholesaler</option>
                </Form.Select>
              : <Form.Control  value={types=b.AgricultureType} onClick={CompanyType} onChange={(e) =>setTypes(e.target.value)} id="type" />
            }
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
            </InputGroup>
        </Form.Group>
          </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="4" >
            <Form.Label>Company Name</Form.Label>
            {
              cName
              ?  <Form.Control
                    required
                    type="text"
                    id='name'
                    placeholder="Name"
                    value={cname} onChange={(event) => setName(event.target.value)}
                  />
              : <Form.Control
                  required
                  type="text"
                  id='name'
                  placeholder="Name"
                  value={cname=b.CompanyName} onClick={CompanyName} onChange={(event) => setName(event.target.value)}
                /> 
            }
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="8">
            <Form.Label>Company Address</Form.Label>
            {
              cAddress
              ?  <Form.Control
                    required
                    type="text"
                    placeholder="Address"
                    id='city'
                    value={caddress} onChange={(event) => setAddress(event.target.value)}
                  />
              : <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  id='city'
                  value={caddress=b.CompanyAddress} onClick={CompanyAddress} onChange={(event) => setAddress(event.target.value)}
                />
            }
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row className='mb-3'>
          <Form.Group as={Col} md="4" >
            <Form.Label>District</Form.Label>
            {
              cDistrict
              ? <Form.Select value={district}  onChange={(e) =>setDistrict(e.target.value)} id="dist" >
                  <option value="">choose..</option>
                  <option value="Bagalkot ">Bagalkot </option>
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
              : <Form.Control value={district=b.District} onClick={CompanyDistrict} onChange={(e) =>setDistrict(e.target.value)} id="dist" />
            }
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>State</Form.Label>
            {
              cState
              ? <Form.Select  value={state} onChange={(e) =>setState(e.target.value)} id="state" >
                  <option value="">choose..</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Karnataka">Karnataka</option>
                </Form.Select>
              : <Form.Control  value={state=b.State} onClick={CompanyState} onChange={(e) =>setState(e.target.value)} id="state" />
            }
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>PinCode</Form.Label>
            {
              cPincode
              ? <Form.Control type="number" placeholder="PinCode" id='pin'
                  value={pincode} onChange={(event) => setPinCode(event.target.value)} required 
                />
              : <Form.Control type="number" placeholder="PinCode" id='pin'
                  value={pincode=b.PinCode} onClick={CompanyPinCode} onChange={(event) => setPinCode(event.target.value)} required 
                /> 
            }
            <Form.Control.Feedback type="invalid">
              Please provide a valid PinCode.
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Label>Contact Number</Form.Label>
            {
              cMobNum
              ? <Form.Control type="number" placeholder="MobileNumber" id='mobile'
                  value={phonenumber} onChange={(event) => setPhone(event.target.value)} required 
                />
              : <Form.Control type="number" placeholder="MobileNumber" id='mobile'
                  value={phonenumber=b.ContactNumber} onClick={CompanyMobNum} onChange={(event) => setPhone(event.target.value)} required 
                />
            }
            <Form.Control.Feedback type="invalid">
              Please provide a valid MobileNumber.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Company MailAddress</Form.Label>
            {
              cMail
              ? <Form.Control type="text" placeholder="CompanyMail" id='adhar'
                  value={cmail} onChange={(event) => setMail(event.target.value)} required 
                />
              : <Form.Control type="text" placeholder="AdharNumber" id='adhar'
                  value={cmail=b.CompanyMail} onClick={CompanyMail} onChange={(event) => setMail(event.target.value)} required 
                />
            }
            <Form.Control.Feedback type="invalid">
              Please provide a valid MailAddress.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
            <Button type="button"  onClick={() => {submit(b.id);}} style={{fontSize:'1.5rem'}}>Submit</Button>
            </div>
          );
        })}
      </Form>
          </Card.Body>
          </Card>
      </div>
      </div>
      </div>
    )
}

export default BuyerUpdateProfile
