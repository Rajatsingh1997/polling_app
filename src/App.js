import SignInfrm from "./components/SignInfrm";
import SignUpfrm from "./components/SignUpfrm";
import Dashbord from "./components/Dashbord";
import Success from "./components/Success";
import AddPoll from "./components/Addpoll";
import Editpol from "./components/Editpol";
import { HashRouter, Route, Switch } from "react-router-dom";
import PrivateRouting from "./components/PrivateRouting";
function App() {
  return (
    <HashRouter>
      <Switch>

      <Route path="/"   exact  component={
          localStorage.getItem("token") ? Dashbord : SignInfrm
        }/>
        {/* <Route path="/" exact component={SignInfrm} /> */}
        <Route path="/signinfrm" exact component={SignInfrm} />
        <Route path="/signupform" exact component={SignUpfrm} />
        <PrivateRouting path="/dashbord" exact component={Dashbord} />
        <PrivateRouting path="/addpoll" component={AddPoll} />
        <PrivateRouting path="/success" exact component={Success} />
        <PrivateRouting path="/editpol/:id" exact component={Editpol} />
      </Switch>
    </HashRouter>
  );
}

export default App;
