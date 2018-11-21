import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Pages/Main';
import './App.css';

class App extends Component {

  state={
    mobileNavVisibility :false
  }
  render() {
    return (
      <Main></Main>
    );
  }
}

export default App;
