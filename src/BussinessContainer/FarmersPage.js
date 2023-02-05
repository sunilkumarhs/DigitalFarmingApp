import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import NavBar from '../NavBarContainer/NavBar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Avatar } from '@mui/material'
import { db, auth } from '../firebase';
import {collection, getDocs} from 'firebase/firestore';
import { storage } from '../firebase/index';
import { getDownloadURL, listAll, ref} from 'firebase/storage';

function FarmersPage() {
  
  const [farmers, setFarmers] = useState([]);
  const [farmer, setFarmer] = useState([]);
  const [photoUrl, setPhotoUrl] = useState([]);
  // const [urls, seturl] = useState(false);
  // const photo = null;
  const navigate = useNavigate();

  const user = auth?.currentUser?.email;

  const farmerCollectionref = collection(db,"farmers")

  useEffect (() => {
    const getfarmers = async () => {
      const data = await getDocs(farmerCollectionref);
      setFarmers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getfarmers();
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

  useEffect(() => {
    const getPhotoUrl = async () => {
      const proRef = ref(storage, "profile/");
      listAll(proRef).then((res) => {
        res.items.forEach((itemRef) => {
          // console.log(itemRef);
          getDownloadURL(itemRef).then((url) => {
            if(url && url.length > 0) {
              // console.log("photourl:" +url);
              if(itemRef.name === auth?.currentUser?.uid) {
                setPhotoUrl({
                  url:url,
                });
                // seturl(true);
              } 
              // else {
              //   setPhotoUrl([]);
              //   // seturl(false);
              // }
            }
          })
        })
      })
    }
    getPhotoUrl();
  },[])

  // console.log(photoUrl);
  // if(urls !== false) {
  //    photo = photoUrl.map((p) => p.url);
  // }
  const handleUpdate = () => {
    navigate('/UpdateProfile');
  }
  return (
    <div>
      <section className='farmsec'>
      <NavBar/>
      <div className="container-fluid py-4" style={{color:'white'}}>
      <Container fluid>
          <div style={{textAlign: "center"}}>
            <h1>Welcome to Farmer Block</h1>
          </div>
          <div className="row gx-5">
              <div className="col-lg-8 pb-0 mb-lg-0">
                <p style={{fontSize:'1.5rem'}} className='pb-2'>
                  The tests provided here are for evaluating soil fertility, pH level,
                  and/or problems due to excessive salts or fertilizer materials.
                  Based on the test results and type of plants to be grown,
                  you will be sent the appropriate fertilizer recommendation for good plant growth
                  without adverse effects on the environment. Watch the video below to learn how to
                  collect soil samples from your lawn or garden. 
                  </p>
                 
              </div>
              <div className="col-lg-4 pb-5">
                <div style={{backgroundColor:'lightgray',padding:'1rem',
                 background:'linear-gradient(230deg,rgb(40, 154, 241),rgb(30, 10, 80))' }}>
                  <div style={{textAlign: "center"}}>
                  <h1>Profile</h1>
                  <div className='pb-4' style={{justifyContent: "center", display: "flex"}}>
                  <Avatar
                          alt="farmer_img"
                          src={photoUrl.url}
                          sx={{ width: 100, height: 100 }}
                        />
                    {/* {
                      urls
                      ?  <Avatar
                          alt="farmer_img"
                          src={photoUrl.url}
                          sx={{ width: 100, height: 100 }}
                        />
                      : <Avatar
                          alt="farmer_img"
                          sx={{ width: 100, height: 100 }}
                        />
                    } */}
                  </div>
                  </div>
                  <div className='pb-4'>
                  {farmer.map(farm => (
                    <div key={farm.id}> 
                    <Card className='cards'>
                  <Card.Body>
                  <Row className='mb-2'> 
                    <Form.Group as={Col} md="12">
                        <Form.Label>UserID</Form.Label>
                        <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        placeholder={farm.UserID}
                        aria-describedby="inputGroupPrepend"
                        disabled
                      />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group as={Col} md="6" >
                    <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        id='name'
                        placeholder={farm.Name}
                        disabled
                      />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Address</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={farm.Address}
                          disabled
                        />
                    </Form.Group>
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>District</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={farm.District}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={farm.State}
                        disabled
                      />
                      </Form.Group>
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="6">
                        <Form.Label>PinCode</Form.Label>
                        <Form.Control type="number" placeholder={farm.PinCode}
                        disabled
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="number" placeholder={farm.MobileNumber}
                      disabled 
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Adhar Number</Form.Label>
                      <Form.Control type="number" placeholder={farm.AdharNumber}
                      disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Farmer ID</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">ID</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder={farm.FarmerID}
                          aria-describedby="inputGroupPrepend"
                          disabled
                        />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  </Card.Body>
                  </Card>
                    </div>
                  ))}
                  </div>
                  <div style={{textAlign:"center"}}>
                    <Button onClick={handleUpdate}><b style={{fontSize:'1.5rem'}}>Update</b></Button>
                  </div>
                </div>
              </div>
          </div>
          </Container>      
        </div>
      </section>
    </div>
  )
}

export default FarmersPage
