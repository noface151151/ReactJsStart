import React, { Component } from "react";
import logo from "./logo.svg";
import {Route,Switch,withRouter,Redirect} from 'react-router-dom'; 
import "./App.css";
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncHome = asyncComponent(()=>{
  return import('./Pages/Home')
})
class App extends Component {
  render() {
    return (
      <Layout>
         <Switch>
              <Route path="/" exact component={asyncHome} />
              <Redirect to="/"/>
          </Switch>
      </Layout>
      
    );
  }
}

export default App;
