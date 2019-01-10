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
    //   entityMap: {
    //     0:  {type: "LINK",
    //           mutability: "MUTABLE",
    //           data: {
    //             url: "https://github.com/lokiuz/redraft"
    //           }},
    //     1: {
    //       type: 'LINK',
    //       mutability: 'MUTABLE',
    //       data: {
    //         url: 'https://github.com/lokiuz/redraft/blob/master/README.md',
    //       },
    //     },
    //     2: {
    //       type: 'LINK',
    //       mutability: 'MUTABLE',
    //       data: {
    //         url: 'https://github.com/lokiuz/redraft/tree/master/example/src',
    //       },
    //     },
    //   },
    //   blocks: [
    //     {
    //       key: '8ofc8',
    //       text: 'Render to React components sample',
    //       type: 'header-one',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: 'f9oqb',
    //       text: 'You can define custom components to render any part of the draf-js raw.',
    //       type: 'unstyled',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [
    //         {
    //           offset: 59,
    //           length: 7,
    //           key: 0,
    //         },
    //       ],
    //       data: {},
    //     }, {
    //       key: 'edq7t',
    //       text: 'With cleanup and split flag enabled you can create new paragraphs with empty lines.',
    //       type: 'unstyled',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: '964p1',
    //       text: '',
    //       type: 'unstyled',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: 'cd2or',
    //       text: 'Like this.',
    //       type: 'unstyled',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: '3ov91',
    //       text: '',
    //       type: 'atomic',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {
    //         src: 'sample_cat.jpg',
    //         type: 'image',
    //         display: 'medium',
    //         caption: 'Some cat tax',
    //         rightsHolder: 'Inge Wallumrød, under CC0 License ',
    //       },
    //     }, {
    //       key: '1pdul',
    //       text: 'Lists are cool',
    //       type: 'unordered-list-item',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: '224ne',
    //       text: 'try to add or delete',
    //       type: 'unordered-list-item',
    //       depth: 0,
    //       inlineStyleRanges: [
    //         {
    //           offset: 7,
    //           length: 3,
    //           style: 'BOLD',
    //         }, {
    //           offset: 14,
    //           length: 6,
    //           style: 'BOLD',
    //         }, {
    //           offset: 7,
    //           length: 3,
    //           style: 'ITALIC',
    //         }, {
    //           offset: 14,
    //           length: 6,
    //           style: 'ITALIC',
    //         },
    //       ],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: 'dulcp',
    //       text: 'some items',
    //       type: 'unordered-list-item',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: 'f0nn7',
    //       text: 'in this example',
    //       type: 'unordered-list-item',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [],
    //       data: {},
    //     }, {
    //       key: 'bg0j2',
    //       text: 'Redraft api is simple and declarative, for more info check the readme or this example source ',
    //       type: 'blockquote',
    //       depth: 0,
    //       inlineStyleRanges: [],
    //       entityRanges: [
    //         {
    //           offset: 63,
    //           length: 6,
    //           key: 1,
    //         },
    //         {
    //           offset: 86,
    //           length: 6,
    //           key: 2,
    //         },
    //       ],
    //       data: {},
    //     },
    //   ],
    // };
    
   // const content = {"blocks":[{"key":"36e3v","text":"dddddddd","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":8,"key":0}],"data":{}},{"key":"2a7l0","text":"aaaaaaaaa","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":9,"key":1}],"data":{}},{"key":"7g7fl","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://stackoverflow.com/questions/41808428/react-proptypes-allow-different-types-of-proptypes-for-one-prop"}},"1":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://draftjs.org/docs/advanced-topics-entities"}}}}
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
