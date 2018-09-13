import React, { Component } from "react";
import axios from "axios";

class RequiredAuth extends Component {
  click = () => {
    axios
      .get("http://localhost:51520/api/Values/Get",{
        isRequiredAuth:true
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        // console.log(error);
      });
  };

  render() {
    
    return <button onClick={this.click}>RequiredAuth</button>;
  }
}

export default RequiredAuth;
