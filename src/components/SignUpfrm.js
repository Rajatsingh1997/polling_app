import React,{useState} from "react";
import { Form, Button,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import "./SignUpfrm.css";
import {SignInRequest} from '../redux/Action/action'

export default function SignUpform() {
  
  const[email, setEmail] = useState('');
  const[paswrd,setPaswrd] = useState('');
  const[select,setSelect] =useState('Admin');

  // const handleClose=()=> setShow("false")
  // const handleShow=()=>setShow("true") 
  const handleSubmit = () => {
    let formData = {
        Email: email.trim(),
        Password: paswrd.trim(),
        Select: select,
    };
    // setEmail("");
    // setPaswrd("");
  
  // const dispatch=useDispatch();
  // const handleSubmit=()=>{
  //  const payloaddata=
  
  //  {
     

  //  }
  //  dispatch(SignInRequest(payloaddata))
  // }
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
            placeholder="Password" 
            value={paswrd}
            onChange={(e) => setPaswrd(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select</Form.Label>
            <Form.Control 
            as="select"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            >
              <option>Guest</option>
              <option>Admin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Link to= "/success">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          </Link>
          {/* <Button variant="success">Success</Button>{' '} */}
        </Form>
      </div>
    </>
  );
}
}

