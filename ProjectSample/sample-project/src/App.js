import React, { Component } from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./Pages/Logout";
import NotRequiredAuth from "./Pages/NotRequiredAuth";
import RequiredAuth from "./Pages/RequiredAuth";
import NotFound from "./Pages/NotFound";
import requiredAuthComponent from "./hoc/auth/authRequired";
import AddMessage from "./Pages/AddMessage";
import Header from "./Pages/Header";
import LoginSingle from './Pages/LoginSingle';
import axios from 'axios';
import MyEditor from './Pages/RichTextBox/index';

import "./App.css";

class App extends Component {


//   test =()=>{
//     axios.get('http://localhost:51520/api/values/InitSession',{withCredentials: true}).then((res)=>{
// console.log(res)
//     }).catch((err)=>{
// console.log(err)
//     })
//   }
  render() {
    let nav = null;
    let header = null;
    if (this.props.isAuthenticated) {
      nav = (
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
          <Link to="/AddMessage"> AddMessage</Link>
          <br />
          <br />
        </div>
      );
      header = (
        <Header
          isAuthenticated={this.props.isAuthenticated}
          username={this.props.username}
        />
      );
    }
    const content = {
      "blocks": [{
        "key": "9s0dn",
        "text": "nam",
        "type": "unordered-list-item",
        "depth": 0,
        "inlineStyleRanges": [{
          "offset": 0,
          "length": 3,
          "style": "BOLD"
        }],
        "entityRanges": [],
        "data": {}
      }, {
        "key": "fb2hd",
        "text": "dsdsds",
        "type": "unordered-list-item",
        "depth": 0,
        "inlineStyleRanges": [{
          "offset": 0,
          "length": 6,
          "style": "BOLD"
        }],
        "entityRanges": [],
        "data": {}
      }, {
        "key": "id9i",
        "text": "dsdsds",
        "type": "unordered-list-item",
        "depth": 0,
        "inlineStyleRanges": [{
          "offset": 0,
          "length": 6,
          "style": "BOLD"
        }],
        "entityRanges": [],
        "data": {}
      }],
      "entityMap": {}
    }
    return (
      // <div>
      //  {header}
      //   <br />
      //   <br />
      //   {nav}
      //   <Switch>
      //     <Route path="/" exact component={LoginSingle} />
      //     <Route path="/Login" component={LoginSingle} />
      //     <Route path="/Logout" component={Logout} />
      //     <Route
      //       path="/RequiredAuth"
      //       component={requiredAuthComponent(RequiredAuth, true)}
      //     />
      //     <Route
      //       path="/NotRequiredAuth"
      //       exact
      //       component={requiredAuthComponent(NotRequiredAuth, false)}
      //     />
      //     <Route
      //       path="/AddMessage"
      //       component={requiredAuthComponent(AddMessage, true)}
      //     />
      //     <Route component={NotFound} />
      //   </Switch>
      // </div>
    //  <button onClick={this.test}></button>

      <MyEditor content={content}></MyEditor>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    username: state.auth.username
  };
};
export default withRouter(connect(mapStateToProps, null)(App));
