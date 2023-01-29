import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import classNames from 'classnames';
import Col from 'react-bootstrap/Col';
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const FarmLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [types, setTypes] = useState("");
   
    const navigate = useNavigate();
    // const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    });

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
                        if(types.length === 6){
                        navigate('/FarmersPage');
                        }else{
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

    // const login = (event) => {
    //     if(types.length !== 0) {
    //     if(username.length !== 0) {
    //       if(payload) {
    //         dispatch({
    //             type : 'LOGIN',
    //             payload
    //         })
    //         alert("Login Successfull");
    //         if(types.length === 6){
    //         navigate('/FarmersPage');
    //         }else{
    //           navigate('/BuyersPage');
    //         }
    //       }else{
    //           alert('Incorrect Credential !!')
    //           event.preventDefault();
    //           document.querySelector('#user').focus();
    //       }
    //     }else{
    //       alert("You are not registered!")
    //       event.preventDefault();
    //       document.querySelector('#user').focus();
    //     }
    //   }else {
    //     alert("Please select the proper login type!")
    //       event.preventDefault();
    //       document.querySelector('#type').focus();
    //   }
        
    // }

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
          <Form.Control type="text" placeholder="Enter Username" id='user' onChange={(e) =>setUsername(e.target.value)} />
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
