import React, { useState } from "react";
import { Form, Button, Navbar, Spinner, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SignUpfrm.css";
import { SignUpRequest } from "../redux/action/actions";

export default function SignUpfrm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("Guest");

  const dispatch = useDispatch();

  const signupState = useSelector((state) => state.SignUpStatus);

  const handleSubmit = () => {
    let formData = {
      username: user.trim(),
      password: password.trim(),
      option: option,
    };
    console.log(formData);
    dispatch(SignUpRequest(formData)); //(SignUpRequest comes from the action folder)
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
            <Form.Label className>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
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
            <Form.Label>User type</Form.Label>
            <Form.Control
              as="select"
              name={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option>--Select--</option>
              <option value="guest">Guest</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={user && password ? false : true}
            onClick={() => handleSubmit()}
          >
            {signupState.isLoading === true ? (
              <Spinner
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null}
            {signupState.isLoading === true ? null : <span>submit</span>}
          </Button>
          <Container>
            {signupState.isSignedUp ? (
              <h6 style={{ color: "black" }}>
                Registration Successful. Please login to continue...
              </h6>
            ) : (
              <h6 style={{ color: "Red" }}>{signupState.error}</h6>
            )}
          </Container>
        </Form>
      </div>
    </>
  );
}
