import React from "react";
import { Navbar, Button } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./Navbr.css";
import { Link } from "react-router-dom";


export default function Navbr() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/">
        <Button variant="success">Logout</Button>{" "}
        </Link>
        {/* <Link to={props.link1}>
          <Button className="float-right" variant="success">
            {props.buttonText1}
          </Button>
        </Link>
        <Link to={props.link}>
          <Button
            className="float-right"
            variant="success"
            onClick={handleLogout}
          >
            {props.buttonText}
          </Button>
        </Link> */}
      </Navbar>
    </div>
  );
}
