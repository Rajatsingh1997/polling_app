import SignInfrm from "./components/SignInfrm";
import SignUpfrm from "./components/SignUpfrm";
import Dashbord from "./components/Dashbord";
import Success from "./components/Success";
import AddPoll from "./components/Addpoll";
import Editpol from "./components/Editpol";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRouting from "./components/PrivateRouting";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignInfrm} />
        {/* <Route path="/signin" exact component={SignInfrm} /> */}
        <Route path="/signupform" exact component={SignUpfrm} />
        <PrivateRouting path="/dashbord" exact component={Dashbord} />
        <PrivateRouting path="/addpoll" component={AddPoll} />
        <PrivateRouting path="/success" exact component={Success} />
        <PrivateRouting path="/editpoll" exact component={Editpol} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
