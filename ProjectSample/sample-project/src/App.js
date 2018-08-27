import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect, Link } from "react-router-dom";

import Login from "./Pages/Login";
import NotRequiredAuth from "./Pages/NotRequiredAuth";
import RequiredAuth from "./Pages/RequiredAuth";
import NotFound from "./Pages/NotFound";
import requiredAuthComponent from "./hoc/auth/authRequired";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/Login"> Login</Link>
        <br />
        <br />
        <Link to="/RequiredAuth"> RequiredAuth</Link>
        <br />
        <br />
        <Link to="/NotRequiredAuth"> NotRequiredAuth</Link>
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Login" component={Login} />
          <Route
            path="/RequiredAuth"
            component={requiredAuthComponent(RequiredAuth)}
          />
          <Route path="/NotRequiredAuth" exact component={NotRequiredAuth} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
