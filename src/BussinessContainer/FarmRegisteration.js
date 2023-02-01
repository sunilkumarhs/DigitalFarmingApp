import React from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../firebase';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavBar1 from '../NavBarContainer/NavBar1';


function FarmRegisteration() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [conpass, setConPass] = useState();
    const navigate = useNavigate();

    const register = async () => {
        if(username !== null) {
          if(password === conpass) {
              try {
                const user = await createUserWithEmailAndPassword(auth, username, password);
                console.log(user);
                alert("Registeration Succesfull");
                await signOut(auth);
                navigate('/FarmLogin');
                }catch (error) {
                console.log(error.message);
                alert(error.message);
                }
          } else {
            alert("Password didn,t match");
          }
        } else {
          alert("Please provide the email address")
        }
    }
  return (
    <div>
      <div>
        <NavBar1/>
    <div className='nav'>
    <div className='container'>
        <Card className='cards'>
        <Card.Header as="h5">REGISTER</Card.Header>
        <Card.Body>
            <Card.Title>Registeration Form</Card.Title>
            <Card.Text>
            Please provide your detail to Login.
            </Card.Text>
        <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>E-mail</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="E-mail Id"
              id='user'
              aria-describedby="inputGroupPrepend"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='pass'
          onChange={(event) => setPassword(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Conform Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='conpass'
          onChange={(event) => setConPass(event.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>    
      <Button type="button" onClick={register}>Submit</Button>
        </Card.Body>
        </Card>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FarmRegisteration
