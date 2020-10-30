import React,{useState} from "react";
import { Form, Button,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import "./SignUpfrm.css";
import {SignUpRequest} from '../redux/Action/action'


export default function SignUpfrm() {
  
  const[user, setUser] = useState('');
  const[password,setPassword] = useState('');
  const[option,setOption] =useState('Admin');
  
  const dispatch =useDispatch();
  
  const signupState =  useSelector((state)=>state.SignUpStatus)
  console.log(signupState,"hhhhhhhhhhhhhh");

  const handleSubmit = () => {
    let formData = {
        user: user.trim(),
        password: password.trim(),
        option: option,
    };
    console.log(formData);
    dispatch(SignUpRequest(formData));  //(SignUpRequest comes from the action folder)
    setUser("");
    setPassword("");
  };
  
  return (
    <>
    <Navbar bg="light" expand="lg" className="box0">
      <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
       <Link to="/">
      <Button variant="success">SignIn</Button>{" "}
      </Link>
    </Navbar>
   
    <div className="formdiv">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className>Email address</Form.Label>
          <Form.Control 
          type="user" 
          placeholder="Enter email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select</Form.Label>
          <Form.Control 
          as="select"
          name={option}
          onChange={(e) => setOption(e.target.value)}
          >
            <option value="Guest">Guest</option>
            <option value="Admin">Admin</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Link to= "/success">
        <Button 
        variant="primary" 
        type="submit" 
        disabled={userName && password ? false : true}
        onClick={handleSubmit}>
          Submit
        </Button>
        </Link>
      </Form>
    </div>
  </>
  )
}


