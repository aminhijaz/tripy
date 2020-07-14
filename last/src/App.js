import React from "react";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Start from "./Start.js";
import Trip from "./Trip.js";
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Route>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Home" component={Home} />
            <Route path="/Trip" component={Trip} />
            <Route path="/Start" component={Start} />
          </Switch>
        </Route>
      </Router>
    </div>
  );
}
