import React,{useState} from "react";
import {  Button, Navbar, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

function Editpol() {
    const handleLogout = () => {
    localStorage.clear();
    // history.push("/");
  };

//   const [poll, setpoll] = useState([]);
//   const [Title, setTitle] = useState("");

  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        {/* <Link to="/addpoll">
          <Button variant="success">Add Poll</Button>{" "}
        </Link>{" "}
        <Link to="/dashbord">
          <Button variant="success">Dashbord</Button>{" "}
        </Link>
        <Link to="/">
          <Button variant="success" onclick={handleLogout}>
            Logout
          </Button>{" "}
        </Link> */}
      </Navbar>
    </div>
  );
}

export default Editpol;
