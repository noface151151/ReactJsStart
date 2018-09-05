import React, { Component } from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import {connect} from 'react-redux';
import Login from "./Pages/Login";
import Logout from './Pages/Logout';
import NotRequiredAuth from "./Pages/NotRequiredAuth";
import RequiredAuth from "./Pages/RequiredAuth";
import NotFound from "./Pages/NotFound";
import requiredAuthComponent from "./hoc/auth/authRequired";
import notRequiredAuthComponent from './hoc/auth/authNotRequired';

import "./App.css";

class App extends Component {
  render() {
    let nav=(
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
      </div>
    )
    if(this.props.isAuthenticated){
       nav=(
      <div>
        <Link to="/Logout"> Logout</Link>
        <br />
        <br />
        <Link to="/RequiredAuth"> RequiredAuth</Link>
        <br />
        <br />
        <Link to="/NotRequiredAuth"> NotRequiredAuth</Link>
        <br />
        <br />
      </div>
    )
    }
    return (
      <div>
        {nav}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/Logout" component={Logout} />
          <Route path="/RequiredAuth" component={requiredAuthComponent(RequiredAuth,true)}/>
          <Route path="/NotRequiredAuth" exact component={requiredAuthComponent(NotRequiredAuth,false)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    isAuthenticated:state.auth.token!==null
  }
}
export default withRouter(connect(mapStateToProps,null)(App));
