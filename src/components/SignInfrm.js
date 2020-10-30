import React, { useState,useEffect } from "react";
import { Form, Button, Navbar,Container } from "react-bootstrap";
import "./SignInfrm.css";
import { Link } from "react-router-dom";
import { SignInRequest } from "../redux/Action/action";
import { useDispatch, useSelector } from "react-redux";

export default function SignInform(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.LoginStatus);
  console.log(loginState, "oooooooo");
  

  const handleSubmit = () => {
    let loginData = {
      username: user.trim(),
      password: password.trim(),
    };
    console.log(loginData);

    dispatch(SignInRequest(loginData));   // ( SignInrequest comes from action )
    setUser("");
    setPassword("");
  };

  useEffect(() => {
    if (loginState.isSignedIn === true || localStorage.getItem("token")) {
      if (loginState.response.toLowerCase() === "admin") {
        props.history.push("/dashbord");
        localStorage.setItem("userType", loginState.response);
      } else if (loginState.response.toLowerCase() === "guest") {
        props.history.push("/success");
        localStorage.setItem("userType", loginState.response);
      } else {
        localStorage.clear();
        props.history.push("/");
      }
    }
  }, [loginState.isSignedIn]);

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

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Link to="/dashbord">
            <Button
              variant="primary"
              type="submit"
              disabled={user && password ? false : true}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Link>
          
          <Container>


          {loginState.isSignedIn ? null : (
                <h6 style={{ color: "Red" }}>{loginState.error}</h6>
              )}

          {/* <Row>
            <Col></Col>
          </Row> */}
        </Container>

        </Form>

     
      </div>
    </>
  );
}
