import React,{useState} from "react";
import { Form, Button,Navbar } from "react-bootstrap";
import "./SignInfrm.css";
import {Link} from "react-router-dom";

export default function SignInform() {

  const[email,setEmail]=useState('')
  const[paswrd,setPaswrd]=useState('')

  const handleSubmit = () => {
    let loginData = {
        username: email.trim(),
        password: paswrd.trim(),
    };
    console.log(loginData)
    // dispatch(LoginRequest(loginData));
    // setEmail("");
    // setPaswrd("");
};

  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" className="box0">
          <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Link to="/signupform">
          <Button variant="success">SignUp</Button>{" "}
          </Link>
        </Navbar>
      </div>
      <div className="formdiv">
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className>Email address</Form.Label>
            <Form.Control 
             type="email" 
             placeholder="Enter email"
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder = "Password"
            value={paswrd}
            onChange={(e) => setPaswrd(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Link to="/dashbord">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
          </Link>
        </Form>
      </div>
    </>
  );
}
