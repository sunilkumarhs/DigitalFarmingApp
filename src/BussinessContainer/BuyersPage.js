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
import {collection, getDocs,doc, getDoc} from 'firebase/firestore';
import { storage } from '../firebase/index';
import { getDownloadURL, listAll, ref} from 'firebase/storage';
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BuyersPage() {
  const [buyers, setBuyers] = useState([]);
  const [buyer, setBuyer] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [farmer, setFarmer] = useState([]);
  const [photoUrl, setPhotoUrl] = useState([]);
  const [pType, setPType] = useState('');
  const [pName, setPName] = useState('');
  const [pGrade, setPGrade] = useState('');
  const [pQuant, setPQuant] = useState('');
  const [pPrice, setPPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [srchPrds, setSrchPrds] = useState([]);
  const [disPrds, setDisPrds] = useState([]);
  const [disQPrds, setDisQPrds] = useState([]);
  const [disPPrds, setDisPPrds] = useState([]);
  const [seller, setSeller] = useState('');
  const [con, setCon] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const user = auth?.currentUser?.email;

  const farmerCollectionRef = collection(db,"farmers")
  const buyerCollectionref = collection(db,"buyers")
  const productCollectionRef = collection(db, "AgriProducts")

  useEffect (() => {
    const getFarmers = async () => {
      const data = await getDocs(farmerCollectionRef);
      setFarmers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getFarmers();
  }, [])

  useEffect (() => {
    const getbuyers = async () => {
      const data = await getDocs(buyerCollectionref);
      setBuyers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getbuyers();
  }, [])

  useEffect (() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getProducts();
  }, [])

  useEffect(() => {
    const getBuy = async () => {
      setBuyer(
        buyers.filter(item =>
          Object.values(item)
            .join('')
            .toLowerCase()
            .includes(user.toLowerCase())
        )
      );
    }
    getBuy();
  }, [user, buyers]);
  // const handleSearch = () => {
  // }

  // const handleSearch = () => {
  //   const getPrd = async () => {
  //     setProduct(
  //       products.filter(item => 
  //         Object.values(item)
  //         .join('')
  //         .toLowerCase()
  //         .includes(pType.toLowerCase())
  //         )
  //     )
  //   }
  //   getPrd();
  // }

  //  const handleSearch = () => {
  //   const getPrd = async () => {
  //     setProduct(
  //       products.filter(item => 
  //         srchPrds.every(srchPrd =>
  //         Object.values(item)
  //         .join('')
  //         .toLowerCase()
  //         .includes(pType.toLowerCase())
  //         )
  //         )
  //     )
  //   }
  //   getPrd();
  // }

  useEffect (() => {
    const getPrd = async () => {
      setProduct(
        products.filter(item => 
          Object.values(item)
          .join('')
          .toLowerCase()
          .includes(pType.toLowerCase())
          )
      )
    }
    getPrd();
  }, [pType, products]);

  useEffect (() => {
    const getPrd = async () => {
      setProduct(
        products.filter(item => 
          Object.values(item)
          .join('')
          .toLowerCase()
          .includes(pName.toLowerCase())
          )
      )
    }
    getPrd();
    
  }, [pName, products]);

  useEffect (() => {
    const getPrd = async () => {
      setDisPrds(
        srchPrds.filter(item => 
          Object.values(item)
          .join('')
          .toLowerCase()
          .includes(pGrade.toLowerCase())
          )
      )
    }
    getPrd();
    
  }, [pGrade, srchPrds]);

  useEffect (() => {
    const getPrd = async () => {
      setDisQPrds(
        product.filter(item => 
          Object.values(item)
          .join('')
          .toLowerCase()
          .includes(pQuant.toLowerCase())
          )
      )
    }
    getPrd();
    
  }, [pQuant, product]);

  useEffect (() => {
    const getPrd = async () => {
      setDisPPrds(
        product.filter(item => 
          Object.values(item)
          .join('')
          .toLowerCase()
          .includes(pPrice.toLowerCase())
          )
      )
    }
    getPrd();
    
  }, [pPrice, product]);

  const handleSearch = () => {
    if(pGrade.length !== 0 && con === true) {
      if(disPrds.length !== 0) {
        setSrchPrds(disPrds);
      } else {
        alert("No such porduct in the list!!");
      }
    } else if(pQuant.length !== 0 && con === true) {
      if(disQPrds.length !== 0) {
        setSrchPrds(disQPrds);
      } else {
        alert("No such porduct in the list!!");
      }
    } else if(pPrice.length !== 0 && con === true) {
      if(disPPrds.length !== 0) {
        setSrchPrds(disPPrds);
      } else {
        alert("No such porduct in the list!!");
      }
    } else if(product.length == 0) {
        alert("No such porduct in the list!!");
      } else {
        setSrchPrds(product);
        setCon(true);
      } 
  }

  const handleOwner = async (UserID) => {
    setSeller(UserID);
    setShow(true);
  }

  useEffect(() => {
    const getFarm = async () => {
      setFarmer(
        farmers.filter(item =>
          Object.values(item)
            .join('')
            .toLowerCase()
            .includes(seller.toLowerCase())
        )
      );
    }
    getFarm();
  }, [seller, farmers]);

 

  useEffect(() => {
    const getPhotoUrl = async () => {
      const proRef = ref(storage, "profile/");
      listAll(proRef).then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            if(url && url.length > 0) {
              if(itemRef.name === auth?.currentUser?.uid) {
                setPhotoUrl({
                  url:url,
                });
              } 
            }
          })
        })
      })
    }
    getPhotoUrl();
  },[])

 

  const handleUpdate = () => {
    navigate('/BuyerUpdateProfile');
  }

  const handleClear = () => {
    window.location.reload(false);
  }
  return (
    <div>
      <section className='farmsec'>
      <NavBar/>
      <div className="container-fluid py-4" style={{color:'white'}}>
      <Container fluid>
        <div className='pb-4'>
          <div style={{textAlign: "center"}}>
            <h1>Welcome to Buyer Block</h1>
          </div>
          </div>
          <div className="row gx-5">
              <div className="col-lg-8 pb-4 mb-lg-0">
                <div className='pb-3'>
              <h2>Search for Needed Products here</h2>
              <Card className='cards'>
                  <Card.Body>
                      <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Product Type</Form.Label>
                            <Form.Select required value={pType} onChange={(e) => setPType(e.target.value)}>
                              <option value="">choose..</option>
                              <option value="Vegitable">Vegitable</option>
                              <option value="Grains">Grains</option>
                              <option value="Fruits">Fruits</option>
                              <option value="MISC">MISC</option>
                              <option value="DairyProducts">DairyProducts</option>
                              <option value="Spices">Spices</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Product Name</Form.Label>
                            {
                              pType === "Fruits" 
                              ? 
                              <Form.Select required value={pName} onChange={(e) => setPName(e.target.value)}>
                                  <option value="">choose..</option>
                                  <option value="Amla">Amla</option>
                                  <option value="Banana">Banana</option>
                                  <option value="Custard apple">Custard apple</option>
                                  <option value="Grapes">Grapes</option>
                                  <option value="Jackfruit">Jackfruit</option>
                                  <option value="Kinnow">Kinnow</option>
                                  <option value="Litchi">Litchi</option>
                                  <option value="Mango">Mango</option>
                                  <option value="Orange">Orange</option>
                                  <option value="Papaya">Papaya</option>
                                  <option value="Pomegranate">Pomegranate</option>
                                  <option value="Rambutan">Rambutan</option>
                                  <option value="Sapota">Sapota</option>
                                  <option value="Stawberries">Stawberries</option>
                                  <option value="Watermelon">Watermelon</option>
                                </Form.Select>
                              : 
                              pType === "Grains"
                              ?
                              <Form.Select required value={pName} onChange={(e) => setPName(e.target.value)}>
                                  <option value="">choose..</option>
                                  <option value="Arhar">Arhar</option>
                                  <option value="Bajra">Bajra</option>
                                  <option value="Chana Dal Split">Chana Dal Split</option>
                                  <option value="Foxtail Millet">Foxtail Millet</option>
                                  <option value="Horse Gram">Horse Gram</option>
                                  <option value="Jowar">Jowar</option>
                                  <option value="Kabuli Chana Whole">Kabuli Chana Whole</option>
                                  <option value="Lobia">Lobia</option>
                                  <option value="Maize">Maize</option>
                                  <option value="Oats Raw">Oats Raw</option>
                                  <option value="Paddy">Paddy</option>
                                  <option value="Ragi">Ragi</option>
                                  <option value="Urad Dal Split">Urad Dal Split</option>
                                  <option value="Wheat">Wheat</option>
                                </Form.Select>
                              :
                              pType === "MISC"
                              ?
                              <Form.Select required value={pName} onChange={(e) => setPName(e.target.value)}>
                              <option value="">choose..</option>
                              <option value="Anthurium">Anthurium</option>
                              <option value="Bamboo">Bamboo</option>
                              <option value="Carnation">Carnation</option>
                              <option value="Gladiolus">Gladiolus</option>
                              <option value="Hilsa">Hilsa</option>
                              <option value="Isabgol">Isabgol</option>
                              <option value="Jaggery">Jaggery</option>
                              <option value="Lily">Lily</option>
                              <option value="Mahua flower">Mahua flower</option>
                              <option value="Nutmeg Whole">Nutmeg Whole</option>
                              <option value="Persimmon">Persimmon</option>
                              <option value="Raw Coffee Beans">Raw Coffee Beans</option>
                              <option value="Saffron">Saffron</option>
                              <option value="Tulip">Tulip</option>
                            </Form.Select>
                              :
                              pType === "DairyProducts"
                              ?
                              <Form.Select required value={pName} onChange={(e) => setPName(e.target.value)}>
                              <option value="">choose..</option>
                              <option value="Milk">Milk</option>
                              <option value="Butter">Butter</option>
                              <option value="Cheese">Cheese</option>
                              <option value="Custard">Custard</option>
                              </Form.Select>
                              :
                              pType === "Spices"
                              ?
                              <Form.Select required value={pName} onChange={(e) => setPName(e.target.value)}>
                              <option value="">choose..</option>
                              <option value="Ajwain">Ajwain</option>
                              <option value="Black Pepper Whole">Black Pepper Whole</option>
                              <option value="Cloves Whole">Cloves Whole</option>
                              <option value="Dried Raw Mango Slices">Dried Raw Mango Slices</option>
                              <option value="Fennel seed">Fennel seed</option>
                              <option value="Large cardamom">Large cardamom</option>
                              <option value="Mace Whole">Mace Whole</option>
                              <option value="Poppy Seed">Poppy Seed</option>
                              <option value="Red chilli">Red chilli</option>
                              <option value="Tejpata">Tejpata</option>
                            </Form.Select>
                              :
                              <Form.Select required value={pName} onChange={(e) => setPName(e.target.value)}>
                                  <option value="">choose..</option>
                                  <option value="Aloe Vera">Aloe Vera</option>
                                  <option value="Beetroot">Beetroot</option>
                                  <option value="Capsicum">Capsicum</option>
                                  <option value="Drumstick">Drumstick</option>
                                  <option value="Fenugreek Leaves">Fenugreek Leaves</option>
                                  <option value="Garlic">Garlic</option>
                                  <option value="Ivy gourd">Ivy gourd</option>
                                  <option value="Jimikand">Jimikand</option>
                                  <option value="Lobia Pods">Lobia Pods</option>
                                  <option value="Mustard leaf">Mustard leaf</option>
                                  <option value="Onion">Onion</option>
                                  <option value="Potato">Potato</option>
                                  <option value="Reddish">Reddish</option>
                                  <option value="Sweet Corn">Sweet Corn</option>
                                  <option value="Tapioca">Tapioca</option>
                                </Form.Select>
                            }
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Quality Grade</Form.Label>
                            <Form.Select required value={pGrade} onChange={(e) => setPGrade(e.target.value)}>
                              <option value="">choose..</option>
                              <option value="AGrade">A</option>
                              <option value="BGrade">B</option>
                              <option value="CGrade">C</option>
                            </Form.Select>
                          </Form.Group>
                          </Row>
                          <Row className="mb-3">
                          <Form.Group as={Col} md="4" controlId="validationCustom04">
                            <Form.Label>Quantity in Kuntal</Form.Label>
                            <Form.Control type="number" placeholder="quantity" required  value={pQuant} onChange={(e) => setPQuant(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid quantity.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Price in &#8377; per Kuntal</Form.Label>
                            <Form.Control type="number" placeholder="price" required value={pPrice} onChange={(e) => setPPrice(e.target.value)}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid Price.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                      <Button type="button" onClick={handleSearch}>Search Product</Button>
                      <Button type="button" onClick={handleClear}>Clear Search</Button>
                    </Form>
                  </Card.Body>
                </Card>  
              </div>
              <h2>Result of Searched Product</h2>
              <Table striped bordered hover variant="dark" responsive="xl">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ProductType</th>
                      <th>ProductName</th>
                      <th>QualityGrade</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                  {srchPrds.map((prd) => {
                              return (
                                <tr key={prd.id}>
                                <td>1</td>
                                <td>{prd.ProductType}</td>
                                <td>{prd.ProductName}</td>
                                <td>{prd.QualityGrade}</td>
                                <td>{prd.Quantity}</td>
                                <td>{prd.Price}</td>
                                <td><Button onClick={() => {handleOwner(prd.UserID);}}>Details</Button></td>
                              </tr>
                              )
                          })}
                    {/* {
                      con === true
                      ?  {srchPrds.map((prd) => {
                              return (
                                <tr key={prd.id}>
                                <td>1</td>
                                <td>{prd.ProductType}</td>
                                <td>{prd.ProductName}</td>
                                <td>{prd.QualityGrade}</td>
                                <td>{prd.Quantity}</td>
                                <td>{prd.Price}</td>
                                <td><Button>Delete</Button></td>
                              </tr>
                              )
                          })}
                      : null
                    } */}
                  </tbody>
                </Table> 

                <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Farmer Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
                    <Form.Group as={Col} md="8" >
                    <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        id='name'
                        placeholder={farm.Name}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="12">
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
                    <Form.Group as={Col} md="8">
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
        </Offcanvas.Body>
      </Offcanvas>

              </div>
              <div className="col-lg-4 pb-5">
                <div style={{backgroundColor:'lightgray',padding:'1rem',
                 background:'linear-gradient(230deg,rgb(40, 154, 241),rgb(30, 10, 80))' }}>
                  <div style={{textAlign: "center"}}>
                  <h1>Profile</h1>
                  <div className='pb-4' style={{justifyContent: "center", display: "flex"}}>
                  <Avatar
                    alt="buyer_img"
                    src={photoUrl.url}
                    sx={{ width: 100, height: 100 }}
                  />
                  </div>
                  </div>
                  <div className='pb-4'>
                  {buyer.map(buy => (
                    <div key={buy.id}> 
                    <Card className='cards'>
                  <Card.Body>
                  <Row className='mb-2'> 
                    <Form.Group as={Col} md="12">
                        <Form.Label>UserID</Form.Label>
                        <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        placeholder={buy.UserID}
                        aria-describedby="inputGroupPrepend"
                        disabled
                      />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group as={Col} md="8" >
                    <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        id='name'
                        placeholder={buy.CompanyName}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                      <Form.Label>Company Address</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder={buy.CompanyAddress}
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
                        placeholder={buy.District}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder={buy.State}
                        disabled
                      />
                      </Form.Group>
                  </Row>
                  <Row className='mb-2'>
                    <Form.Group as={Col} md="6">
                        <Form.Label>PinCode</Form.Label>
                        <Form.Control type="number" placeholder={buy.PinCode}
                        disabled
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control type="number" placeholder={buy.ContactNumber}
                      disabled 
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group as={Col} md="10" >
                      <Form.Label>Mail-Address</Form.Label>
                      <Form.Control type="number" placeholder={buy.CompanyMail}
                      disabled
                      />
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

export default BuyersPage
