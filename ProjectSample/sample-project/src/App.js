import React, { Component } from "react";
import {Route,Switch,withRouter,Redirect} from 'react-router-dom'; 
import "./App.css";
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';


 

const asyncHome = asyncComponent(()=>{
  return import('./Pages/Home')
})

const asyncOrderManager  = asyncComponent(()=>{
  return import('./Pages/Order/OrderManager')
})
class App extends Component {
  render() {
    return (
      <Layout>
         <Switch>
              <Route path="/" exact component={asyncHome} />
              <Route path="/DonHang/DanhSach" component = {asyncOrderManager}/>
              <Redirect to="/"/>
          </Switch>
      </Layout>
      
    );
  }
}

export default App;
