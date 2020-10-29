import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "./Navbr.css";
export default function Navbr() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className='box'>Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Button variant="success">SignUp</Button>{" "}
      </Navbar>
    </div>
  );
}
