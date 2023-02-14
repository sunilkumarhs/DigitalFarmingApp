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
import {collection, getDocs, doc, addDoc, deleteDoc} from 'firebase/firestore';
import { storage } from '../firebase/index';
import { getDownloadURL, listAll, ref} from 'firebase/storage';
import Table from 'react-bootstrap/Table';


function FarmersPage() {
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
  const navigate = useNavigate();

  const user = auth?.currentUser?.email;

  const farmerCollectionref = collection(db,"farmers")
  const productCollectionRef = collection(db, "AgriProducts")

  useEffect (() => {
    const getfarmers = async () => {
      const data = await getDocs(farmerCollectionref);
      setFarmers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getfarmers();
  }, [])

  useEffect (() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getProducts();
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

  useEffect (() => {
    const getPrd = async () => {
      setProduct(
        products.filter(item => 
          Object.values(item)
          .join('')
          .toLowerCase()
          .includes(user.toLowerCase())
          )
      )
    }
    getPrd();
  }, [user, products]);

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
    navigate('/UpdateProfile');
  }

  const [validated, setValidated] = useState(false);
  

  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(pType.length !== 0) {
      if(pName.length !== 0) {
        if(pGrade.length !== 0) {
          if(pQuant.length !== 0) {
            if(pPrice.length !== 0) {
              await addDoc(productCollectionRef, {
                UserID: auth?.currentUser?.email,
                ProductType: pType,
                ProductName: pName,
                QualityGrade: pGrade,
                Quantity: pQuant,
                Price: pPrice,
              });
              alert("Successfully Added Product");
              window.location.reload(false);
            } else {
              alert("Enter the full details of product!!");
            }
          } else {
            alert("Enter the full details of product!!");
          }
        } else {
          alert("Enter the full details of product!!");
        }
      } else {
        alert("Enter the full details of product!!");
      }
    } else {
      alert("Enter the full details of product!!");
    }
  };

  const handleDelete = async (id) => {
    const prod = doc(db, "AgriProducts", id);
    await deleteDoc(prod);
    alert("Successfully deleted!!");
    window.location.reload(false);
  }

  return (
    <div>
      <section className='farmsec'>
      <NavBar/>
      <div className="container-fluid py-4" style={{color:'white'}}>
      <Container fluid>
          <div style={{textAlign: "center"}}>
            <div className='pb-4'>
            <h1>Welcome to Farmer Block</h1>
            </div>
          </div>
          <div className="row gx-5">
              <div className="col-lg-8 pb-4 mb-lg-0">
                <div className='pb-3'>
                <h2>Add Your Products</h2>
                <Card className='cards'>
                  <Card.Body>
                      <Form noValidate validated={validated}>
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
                              <option value="A+">A+</option>
                              <option value="A">A</option>
                              <option value="B+">B+</option>
                              <option value="B">B</option>
                              <option value="C+">C+</option>
                              <option value="C">C</option>
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
                      <Button type="button" onClick={handleSubmit}>Add Product</Button>
                    </Form>
                  </Card.Body>
                </Card>  
                </div>
                <h2>Your Poducts</h2>
                <Table striped bordered hover variant="dark" responsive="xl">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ProductType</th>
                      <th>ProductName</th>
                      <th>QualityGrade</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                 {product.map((prd) => {
                  return (
                     <tr key={prd.id}>
                      <td>1</td>
                      <td>{prd.ProductType}</td>
                      <td>{prd.ProductName}</td>
                      <td>{prd.QualityGrade}</td>
                      <td>{prd.Quantity}</td>
                      <td>{prd.Price}</td>
                      <td><Button onClick={() => {handleDelete(prd.id);}}>Delete</Button></td>
                    </tr>
                  )
                 })}
                  </tbody>
                </Table>  
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
