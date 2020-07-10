import React from "react";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Start from "./Start.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route>
            <Switch>
              <Route exact path="/" component={Start} />
              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
            </Switch>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
