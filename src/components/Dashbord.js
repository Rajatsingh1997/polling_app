import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Navbar,
  Spinner,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { PollListRequest } from "../redux/action/actions";
import { DeletePollRequest } from "../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Dashbord.css";

export default function Dashbord() {
  const [ search, setSearch ] = useState("");
  const [newPollist,setPollist]=useState([])

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(PollListRequest());
  }, []);

  const pollList = useSelector((state) => state.PollListStatus.poll);
  console.log(pollList, "poll list state");
useEffect(()=>{
  setPollist(pollList)
},[pollList])
  const pollState = useSelector((state) => state.PollListStatus.isPollfetched);
  console.log(pollState, "poll status");

  const deletePoll = (pollId) => {
    console.log(pollId, "dlete id");
    let poll_ID = {
      id: pollId,
    };

    dispatch(DeletePollRequest(poll_ID));
    setTimeout(dispatch(PollListRequest()), 500);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  // this section is used for search bar on top at dashboard
  
  // const userSearch = (e) => {
  //   console.log(e.target.value,'4444444')
  //   setSearch(e.target.value)
  // }

  useEffect(()=>{
    setPollist(pollList?.filter(value => value.title.toLowerCase().indexOf(search.toLowerCase()) !== -1))


    // let newPollist=pollList.filter((ele)=>{
    //   search===ele.tittle
    //     // let newEle=ele.title.slice(0,searchLength)
    //     // return newEle===search
    //     //  for (var i=0;i<=searchLength;i++){
    //     //    for( var j=0; j<=ele.title.length;j++){
    //     //      if(search[i]==ele.title[j]){
    //     //        console.log(search[i],"oooooooooooooooooooooo")
    //     //      }
    //     //    }
    //     //  }
    // });
    // setPollist(newPollist)
    console.log(newPollist,"5555555")
  },[search])

  
    // if (search == "") {
    //   alert("enter something");
    // }
    // } else {
    //   var value = input.value.toUpperCase();
    //   for (var i = 1; i <= pollList.length; i++) {
    //     if (title.text == input.value) {
    //       if (celldata.toUpperCase().indexOf(value) > -1) {
    //         pollList[i].style.display = "";
    //       } else {
    //         pollList[i].style.display = "none";
    //       }
    //     }
    //   }
    // }
 

  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/addpoll">
          <Button variant="success">Add Poll</Button>
          <span className="green">. </span>
        </Link>{" "}
        {pollState === false ? (
          <center>
            <Spinner className="spinner" animation="grow" variant="dark" />
          </center>
        ) : null}
        <Link to="/signinfrm">
          <Button variant="success" onClick={handleLogout}>
            Logout
          </Button>{" "}
        </Link>
      </Navbar>
      <Jumbotron>
        <Container>
          <Navbar>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e)=>setSearch(e.target.value)}
              />
            
            </Form>
          </Navbar>

          {newPollist.map((item) => (
            <Card key={item._id}>
              <Card.Body>
                <div>
                  <Card.Title>Title : {item.title}</Card.Title>
                  {item.options.map((option, index) => (
                    <div key={index}>
                      <input type="radio" name={item._id} />
                      <label> {option.option}</label>
                      <label className="float-right">
                        Votes: {option.vote}
                      </label>
                    </div>
                  ))}
                </div>
                <hr />
                {/* <Link to="/editpol"> */}
                <Button
                  variant="warning"
                  onClick={() => history.push(`/editPol/${item._id}`)}
                >
                  Edit Poll
                </Button>{" "}
                {/* </Link> */}
                <Button variant="danger" onClick={() => deletePoll(item._id)}>
                  Delete Poll
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Jumbotron>
    </div>
  );
}

// onClick={()=>handleEditpoll(item.id)}
