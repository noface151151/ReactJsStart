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
    // const content = {
    //   "blocks": [{
    //     "key": "232tq",
    //     "text": "",
    //     "type": "unstyled",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [],
    //     "data": {}
    //   }, {
    //     "key": "egr3a",
    //     "text": " ",
    //     "type": "atomic",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [{
    //       "offset": 0,
    //       "length": 1,
    //       "key": 0
    //     }],
    //     "data": {}
    //   }, {
    //     "key": "7lke7",
    //     "text": "",
    //     "type": "unstyled",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [],
    //     "data": {}
    //   }, {
    //     "key": "boa99",
    //     "text": " ",
    //     "type": "atomic",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [{
    //       "offset": 0,
    //       "length": 1,
    //       "key": 1
    //     }],
    //     "data": {}
    //   }, {
    //     "key": "37k0s",
    //     "text": "",
    //     "type": "unstyled",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [],
    //     "data": {}
    //   }, {
    //     "key": "4p6v6",
    //     "text": " ",
    //     "type": "atomic",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [{
    //       "offset": 0,
    //       "length": 1,
    //       "key": 2
    //     }],
    //     "data": {}
    //   }, {
    //     "key": "3lki8",
    //     "text": "",
    //     "type": "unstyled",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [],
    //     "data": {}
    //   }, {
    //     "key": "5m2u9",
    //     "text": "",
    //     "type": "unstyled",
    //     "depth": 0,
    //     "inlineStyleRanges": [],
    //     "entityRanges": [],
    //     "data": {}
    //   }],
    //   "entityMap": [{
    //     "type": "IMAGE",
    //     "mutability": "IMMUTABLE",
    //     "data": {
    //       "src": "https://res.cloudinary.com/productimage/image/upload/v1546849811/ybwixefwc2jkph39vhq6.png"
    //     }
    //   }, {
    //     "type": "IMAGE",
    //     "mutability": "IMMUTABLE",
    //     "data": {
    //       "src": "https://res.cloudinary.com/productimage/image/upload/v1546849811/wrhpgzryveoaplqnycza.png"
    //     }
    //   }, {
    //     "type": "IMAGE",
    //     "mutability": "IMMUTABLE",
    //     "data": {
    //       "src": "https://res.cloudinary.com/productimage/image/upload/v1546849871/snefbazibr4yyconsvgf.png"
    //     }
    //   }]
    // }
    const content = null;
    
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
