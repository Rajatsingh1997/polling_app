import SignInfrm from "./components/SignInfrm";
import SignUpfrm from "./components/SignUpfrm";
import Dashbord from "./components/Dashbord";
import Success from "./components/Success";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
  
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignInfrm}/>
        <Route path="/signupform" exact component={SignUpfrm}/>
        <Route path="/dashbord" exact component={Dashbord}/>
        <Route path="/success" exact component={Success}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
