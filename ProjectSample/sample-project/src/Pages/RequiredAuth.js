import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class RequiredAuth extends Component {
  click = () => {
    axios
      .get("http://localhost:51520/api/Values",{
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

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};
export default connect(mapStateToProps, null)(RequiredAuth);
