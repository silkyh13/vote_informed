import React, { Component } from "react";
import Home from "./Home";
import Chat from "./Chat";
import Issues from "./Issues";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "../styles/App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
      user: null,
      userName: ""
    };
  }

  render() {
    return (
      <Router>
        <div className="homepage">
          <div id="navbar">
            <div className="container">
              <div className="logo"></div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/issues">Issues</Link>
                </li>
                <li>
                  <Link to="/chat">Chat</Link>
                </li>

                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>

                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/issues">
              <Issues />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
