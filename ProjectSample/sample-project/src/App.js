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
//import MyEditor from './Pages/RichTextBox_New/MyEditor';
import ControlledEditor from './Pages/Editor_New/Editor';

import "./App.css";
import * as actions from './store/actions/index'

class App extends Component {


  test =()=>{
    axios.get('http://localhost:51520/api/values/Get').then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  componentWillMount(){
   // this.props.GetPermission();
  }

  render() {
    let nav = null;
    let header = null;
    console.log(this.props.isAuthenticated)
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
    const content = {"blocks":[{"key":"2h9dt","text":"dddddddddddddd ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"color-rgb(147,101,184)"}],"entityRanges":[{"offset":6,"length":8,"key":0}],"data":{}},{"key":"95si4","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7m0he","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":1}],"data":{}},{"key":"2avm5","text":"dddsddsdsds","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2ektq","text":"dsdsds","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f0k2n","text":"dsdddddd","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4vqet","text":"ddddddddd","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://jpuri.github.io/react-draft-wysiwyg/#/demo","targetOption":"_self"}},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://res.cloudinary.com/productimage/image/upload/v1548122427/bs0q0fy3szvlfzfv1btx.png","height":"250px","width":"250px","alignment":"left"}}}};
    
    return (
      <div>
       {header}
        <br />
        <br />
        {nav}
        <Switch>
          <Route path="/" exact component={LoginSingle} />
          <Route path="/Login" component={LoginSingle} />
          <Route path="/Logout" component={Logout} />
          <Route
            path="/RequiredAuth"
            component={requiredAuthComponent(RequiredAuth, true)}
          />
          <Route
            path="/NotRequiredAuth"
            exact
            component={requiredAuthComponent(NotRequiredAuth, false)}
          />
          <Route
            path="/AddMessage"
            component={requiredAuthComponent(AddMessage, true)}
          />
          <Route component={NotFound} />
        </Switch>
        {/* <LoginSingle></LoginSingle>
        <button onClick={this.test}></button> */}
      </div>
    //  <button onClick={this.test}></button>



      
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated:state.auth.isAuthenticated,
    username: state.auth.username
  };
};
const mapDispatchToProps = dispatch => {
  return {
    GetPermission: () => dispatch(actions.GetPermission())
  };
}; 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
