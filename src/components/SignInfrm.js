import React, { useState,useEffect } from "react";
import { Form, Button, Navbar,Container, Spinner } from "react-bootstrap";
import "./SignInfrm.css";
import { Link, useHistory } from "react-router-dom";
import { SignInRequest } from "../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SignInform(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history =useHistory();

  const loginState = useSelector((state) =>  state.LoginStatus);
  // console.log(LoginState)


  

  const handleSubmit = () => {
    let loginData = {
      username: user.trim(),
      password: password.trim(),
    };
    console.log(loginData);

    dispatch(SignInRequest(loginData));   // ( SignInrequest comes from action )
    // console.log(loginState, "oooooooo");
    
    // if (localStorage.getItem("token")) {
    //   props.history.push("/dashbord");
    // }    
    setUser("");
    setPassword("");
  };

  useEffect(() => {

    if (localStorage.getItem("token")) {
      if (loginState?.response?.toLowerCase() === "admin") {
        props.history.push("/dashbord");
        localStorage.setItem("userType", loginState.response.role);
      } else if (loginState?.response?.toLowerCase() === "guest") {
        props.history.push("/success");
        localStorage.setItem("userType",loginState.response);
      } else {
        localStorage.clear();
        props.history.push("/");
      }
    }
    });
 

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
            <Form.Label className>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="user name"
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
            <Button
              variant="primary"
              type="submit"
              disabled={user && password ? false : true}
              onClick={handleSubmit}
            >
             {loginState.isLoading === true ? (
                <Spinner
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <span>Login</span>
              )}
              {/* Login */}
            </Button>
          
          <Container>


          {loginState.isSignedIn ? null : (
                <h6 style={{ color: "Red" }}>{loginState.error}</h6>
              )}

        </Container>

        </Form>

     
      </div>
    </>
  );
}
