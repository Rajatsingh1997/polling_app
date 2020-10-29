import React from "react";
import { Form, Button,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./SignUpfrm.css";

function SignInform() {
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
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select</Form.Label>
            <Form.Control as="select">
              <option>Guest</option>
              <option>Admin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Link to= "/success">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Link>
          {/* <Button variant="success">Success</Button>{' '} */}
        </Form>
      </div>
    </>
  );
}

export default SignInform;
