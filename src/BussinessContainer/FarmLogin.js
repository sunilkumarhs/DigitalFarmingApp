import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import classNames from 'classnames';
import Col from 'react-bootstrap/Col';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import {getDocs, collection} from 'firebase/firestore';
import { db } from '../firebase';

const FarmLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [types, setTypes] = useState("");
   
    const navigate = useNavigate();
    const [farmers, setFarmers] = useState([]);
    const [farmUser, setFarmUser] = useState([]);
    const farmerCollectionRef = collection(db, "farmers");

    useEffect(() => {
      const getFarmers = async () => {
        const data = await getDocs(farmerCollectionRef);
        setFarmers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
      getFarmers();
    },[])

    useEffect(() => {
      const getFarm = async () => {
        setFarmUser(
          farmers.filter(item =>
            Object.values(item)
              .join('')
              .toLowerCase()
              .includes(username.toLowerCase())
          )
        );
      }
      getFarm();
    }, [username, farmers]);

    const login = async () => {
        if(types.length !== 0) {
            try {
                const user = await signInWithEmailAndPassword(
                    auth,
                    username,
                    password
                );
                console.log(user); 
                
                alert("Login Successfull");
                if(types.length === 6 ){
                  if(farmUser.length !== 0 ){
                    navigate('/FarmersPage');
                    }else{
                      navigate('/FarmerDetails');
                    }
                } else {
                  navigate('/BuyersPage');
                }
                        
            } catch (error) {
                console.log(error.message);
                alert(error.message);
            }
        } else {
            alert("Select the type to login");
        }
    }
    const RedisterHandler = () => {
      navigate('/Registeration');
    }

    const LayoutHandler = () => {
      navigate('/');
    }

    const cardClass = classNames("card w-75","log")

  return (
    <div className='login'>
    <div className={cardClass}>
      <div className="card-body">
      <button type="button" className="btn-close" aria-label="Close" onClick={LayoutHandler}></button>
      <Form>
      <Form.Group as={Col}>
          <Form.Label>Login As</Form.Label>
          <Form.Select  value={types} onChange={(e) =>setTypes(e.target.value)} id="type">
            <option value="">Choose...</option>
            <option value="Farmer" >Farmer</option>
            <option value="Buyer" >Buyer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" value={username} id='user' onChange={(e) =>setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" onChange={(e) =>setPassword(e.target.value)} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={login}>Login</Button>
        </Form>
        <div className='nav'>
          <h4>If you have not Registred click below button to Register</h4>
          <button className="btn btn-warning" onClick={RedisterHandler}>Register</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FarmLogin;