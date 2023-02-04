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
import proimg from '../Images/user.jpg';
import { db, auth } from '../firebase';
import { Avatar } from '@mui/material';

function Updateprofile() {
  const [farmers, setFarmers] = useState([]);
  const [farmer, setFarmer] = useState([]);

    const farmerCollectionRef = collection(db, "farmers");

    const user = auth?.currentUser?.email;

    useEffect(() => {
      const getFarmers = async () => {
        const data = await getDocs(farmerCollectionRef);
        setFarmers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      getFarmers();
    }, [])

    useEffect(() => {
      const getFarm = async () => {
        setFarmer(
          farmers.filter(item =>
            Object.values(item)
              .join('')
              .toLowerCase()
              .includes(user.toLowerCase())
          )
        );
      }
      getFarm();
    }, [user, farmers]);
    
    const [validated, setValidated] = useState(false);
    var [name, setName] = useState("");
    var [address, setAddress] = useState("");
    var [phonenumber, setPhone] = useState("");
    var [adharnumber, setAdhar] = useState("");
    var [fid, setFid] = useState("");
    var [pincode, setPinCode] = useState("");
    var [district, setDistrict] = useState("");
    var [state, setState] = useState("");
    var [types, setTypes] = useState("");
    const [fType, setFType] = useState(false);
    const [fName, setFName] = useState(false);
    const [fAddress, setFAddress] = useState(false);
    const [fDistrict, setFDistrict] = useState(false);
    const [fState, setFState] = useState(false);
    const [fPincode, setFPincode] = useState(false);
    const [fMobNum, setFMobNum] = useState(false);
    const [fAdh, setFAdh] = useState(false);
    const [fFid, setFFid] = useState(false);
  
    const navigate = useNavigate();

    

    const farmerType = () => {
      setFType(true);
    }
    const farmerName = () => {
      setFName(true);
    }
    const farmerAddress = () => {
      setFAddress(true);
    }
    const farmerDistrict = () => {
      setFDistrict(true);
    }
    const farmerState = () => {
      setFState(true);
    }
    const farmerPinCode = () => {
      setFPincode(true);
    }
    const farmerMobNum = () => {
      setFMobNum(true);
    }
    const farmerAdh = () => {
      setFAdh(true);
    }
    const farmerFId = () => {
      setFFid(true);
    }


    const submit =  async (id) => { 
      const farmUser = doc(db, "farmers", id);
        setValidated(true);
            if(types.length !== 0) {
            if(name.length !== 0) {
                if(address.length !== 0) {
                    if(district.length !== 0) {
                        if(state.length !== 0) {
                            if(pincode.length === 6) {
                                if(phonenumber.length === 10) {
                                        if(adharnumber.length === 12) {
                                            if(fid.length >= 8) {
                                                await updateDoc(farmUser, {AgricultureType: types,
                                                      UserID: auth?.currentUser?.email,
                                                      Name: name,
                                                      Address: address,
                                                      District: district,
                                                      State: state,
                                                      PinCode: pincode,
                                                      MobileNumber: phonenumber,
                                                      AdharNumber: adharnumber,
                                                      FarmerID: fid
                                                    });
                                                alert("Successfully Registered");
                                                navigate('/FarmersPage');   
                                            }else {
                                              alert("Please enter the proper FarmerID!!");
                                                document.querySelector('#user').focus();
                                            }
                                        }else {
                                          alert("Please enter the proper adhar number");
                                            document.querySelector('#adhar').focus();
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
                    alert("Please enter Provide your address")
                    document.querySelector('#city').focus();
                }
            }else {
                alert("Please enter the name");
                document.querySelector('#name').focus();
            }
            }else {
                alert("Please select your Registeration type");
                document.querySelector("#type").focus();
            }
        }

        const LayoutHandler = () => {
            navigate('/FarmersPage');
          }

  return (
    <div>
      <div className="container-fluid bg-white about py-3">
       <div className='container'>
        <Card className='cards'>
        <Button type="button" className="btn-close" style={{fontSize:'1.5rem'}} aria-label="Close" onClick={LayoutHandler}></Button>
        <Card.Header as="h1"  style={{textAlign:'center'}}>Farmer-Profile</Card.Header>
        <Card.Body>
            <Card.Title as='h2' style={{textAlign:'center'}}>Profile Update</Card.Title>
            <Card.Text as='h5'  style={{textAlign:'center'}}>
              If any Changes, Update Here.
            </Card.Text>
            <div className='pb-3' style={{justifyContent: "center", display: "flex"}}>
                  <Avatar
                    alt="farmer_img"
                    src={proimg}
                    sx={{ width: 100, height: 100 }}
                  />
            </div>
            <Form noValidate validated={validated} >
            {farmer.map((f) => {
        return(
          <div key={f.id}>
             <Row className='mb-3'>   
            <Form.Group as={Col} md="4" >
          <Form.Label>Agriculture Type</Form.Label>
          {
            fType 
            ? <Form.Select  value={types} onChange={(e) =>setTypes(e.target.value)} id="type" >
                <option value="">choose..</option>
                <option value="Subsistence Agriculture">Subsistence Agriculture</option>
                <option value="Industrialized Agriculture">Industrialized Agriculture</option>
              </Form.Select>
            : <Form.Control  value={types=f.AgricultureType} onClick={farmerType} onChange={(e) =>setTypes(e.target.value)} id="type" />
              //   <option value={f.AgricultureType}>{f.AgricultureType}</option>
              //   <option value="Subsistence Agriculture">Subsistence Agriculture</option>
              //   <option value="Industrialized Agriculture">Industrialized Agriculture</option>
              // </Form.Select> 
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
          <Form.Label>Name</Form.Label>
          {
            fName
            ?  <Form.Control
                  required
                  type="text"
                  id='name'
                  placeholder="Name"
                  value={name} onChange={(event) => setName(event.target.value)}
                />
            : <Form.Control
                required
                type="text"
                id='name'
                placeholder="Name"
                value={name=f.Name} onClick={farmerName} onChange={(event) => setName(event.target.value)}
              /> 
          }
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Form.Label>Address</Form.Label>
          {
            fAddress
            ?  <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  id='city'
                  value={address} onChange={(event) => setAddress(event.target.value)}
                />
            : <Form.Control
                required
                type="text"
                placeholder="Address"
                id='city'
                value={address=f.Address} onClick={farmerAddress} onChange={(event) => setAddress(event.target.value)}
              />
          }
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group as={Col} md="4" >
          <Form.Label>District</Form.Label>
          {
            fDistrict
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
            : <Form.Control value={district=f.District} onClick={farmerDistrict} onChange={(e) =>setDistrict(e.target.value)} id="dist" />
            //   {/* <option value={f.District}>{f.District}</option>
            //   <option value="Bagalkot ">Bagalkot </option>
            //   <option value="Ballari ">Ballari </option>
            //   <option value="Chikballapur ">Chikballapur  </option>
            //   <option value="Chitradurga ">Chitradurga </option>
            //   <option value="Davanagere ">Davanagere </option>
            //   <option value="Dharwad ">Dharwad </option>
            //   <option value="Gadag ">Gadag </option>
            //   <option value="Hassan ">Hassan </option>
            //   <option value="Haveri  ">Haveri </option>
            //   <option value="Kodagu  ">Kodagu </option>
            //   <option value="Kolar ">Kolar</option>
            //   <option value="Mandya ">Mandya </option>
            //   <option value="Mysuru ">Mysuru i </option>
            //   <option value="Raichur ">Raichur  </option>
            //   <option value="Shivamogga  ">Shivamogga </option>
            //   <option value="Udupi ">Udupi </option>
            // </Form.Select>  */}
          }
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>State</Form.Label>
          {
            fState
            ? <Form.Select  value={state} onChange={(e) =>setState(e.target.value)} id="state" >
                <option value="">choose..</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Karnataka">Karnataka</option>
              </Form.Select>
            : <Form.Control  value={state=f.State} onClick={farmerState} onChange={(e) =>setState(e.target.value)} id="state" />
              //   {/* <option value={f.State}>{f.State}</option>
              //   <option value="Karnataka">Karnataka</option>
              //   <option value="Karnataka">Karnataka</option>
              // </Form.Select>  */}
          }
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>PinCode</Form.Label>
          {
            fPincode
            ? <Form.Control type="number" placeholder="PinCode" id='pin'
                value={pincode} onChange={(event) => setPinCode(event.target.value)} required 
              />
            : <Form.Control type="number" placeholder="PinCode" id='pin'
                value={pincode=f.PinCode} onClick={farmerPinCode} onChange={(event) => setPinCode(event.target.value)} required 
              /> 
          }
          <Form.Control.Feedback type="invalid">
            Please provide a valid PinCode.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>Mobile Number</Form.Label>
          {
            fMobNum
            ? <Form.Control type="number" placeholder="MobileNumber" id='mobile'
                value={phonenumber} onChange={(event) => setPhone(event.target.value)} required 
              />
            : <Form.Control type="number" placeholder="MobileNumber" id='mobile'
                value={phonenumber=f.MobileNumber} onClick={farmerMobNum} onChange={(event) => setPhone(event.target.value)} required 
              />
          }
          <Form.Control.Feedback type="invalid">
            Please provide a valid MobileNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Adhar Number</Form.Label>
          {
            fAdh
            ? <Form.Control type="number" placeholder="AdharNumber" id='adhar'
                value={adharnumber} onChange={(event) => setAdhar(event.target.value)} required 
              />
            : <Form.Control type="number" placeholder="AdharNumber" id='adhar'
                value={adharnumber=f.AdharNumber} onClick={farmerAdh} onChange={(event) => setAdhar(event.target.value)} required 
              />
          }
          <Form.Control.Feedback type="invalid">
            Please provide a valid AdharNumber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Farmer ID</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">ID</InputGroup.Text>
            {
              fFid
              ?  <Form.Control
                    type="text"
                    placeholder="Username"
                    id='user'
                    aria-describedby="inputGroupPrepend"
                    value={fid} onChange={(event) => setFid(event.target.value)}
                    required
                  />
              :  <Form.Control
                    type="text"
                    placeholder="Username"
                    id='user'
                    aria-describedby="inputGroupPrepend"
                    value={fid=f.FarmerID} onClick={farmerFId} onChange={(event) => setFid(event.target.value)}
                    required
                  />
            }
            <Form.Control.Feedback type="invalid">
              Please provide the valid Farmer ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
          <Button type="button"  onClick={() => {submit(f.id);}} style={{fontSize:'1.5rem'}}>Submit</Button>
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

export default Updateprofile
