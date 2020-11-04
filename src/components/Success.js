import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  Container,
  Jumbotron,
  Button,
  Spinner,
  Navbar,
} from "react-bootstrap";
import { PollListRequest } from "../redux/action/actions";
import { PollRequest } from "../redux/action/actions";

function Success() {
  const [error, seterror] = useState(false);
  const [poll, setpoll] = useState([]);
  const [item, setItem] = useState();
  const [next, setNext] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  useEffect(() => {
    dispatch(PollListRequest());
  }, []);
  const pollList = useSelector((state) => state.PollListStatus.poll);
  useEffect(() => {
    setpoll(pollList);
  }, [pollList]);
  const pollStatus = useSelector((state) => state.PollListStatus.isPollfetched);
  const handlePoll = (option) => {
    let usertoken = localStorage.getItem("token");
    let Poll = {
      id: item._id,
      option: option,
      token: usertoken,
    };
    dispatch1(PollRequest(Poll));
  };
  console.log(item);
  const handleLogout = () => {
    localStorage.clear();
    history.push("/signinfrm");
  };
  useEffect(() => {
    var item = poll[Math.floor(Math.random() * poll.length)];
    if (item) {
  
      setItem(item);
    }
  }, [poll.length]);
  const handledoublePollClick = (id) => {
    if (localStorage.getItem(id)) {
      seterror(true);
    }
  };
  const refreshPage = () => {
    window.location.reload(false);

  };
  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/signinfrm">
          <Button variant="success" onClick={handleLogout}>
            Logout
          </Button>{" "}
        </Link>
      </Navbar>
      <Jumbotron>
        <Container>
          {pollStatus === false ? (
            <Spinner className="spinner" animation="border" variant="primary" />
          ) : null}
          {item && (
            <Card
              className="Card1"
              onClick={() => handledoublePollClick(item.id)}
            >
              <Card.Title>Title : {item.title}</Card.Title>
              <Container>
                {item.options.map((option, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      name="options"
                      onChange={() => {
                        handlePoll(option.option);
                        setNext(true);
                      }}
                    />
                    <label>{option.option}</label>
                  </div>
                ))}
              </Container>
              {!next ? null : (
                <Button variant="primary" onClick={refreshPage}>
                  Next
                </Button>
              )}
            </Card>
          )}
        </Container>
      </Jumbotron>
    </div>
  );
}
export default Success;
