import React, { Component } from "react";
import axios from "axios";

class AddMessage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      message: "",
      userRevice:""
    };
  }
  updateMessageValue(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  updateUserReceiveValue(evt){
    this.setState({userRevice:evt.target.value})
  }
  click = () => {
    axios
      .get(`http://localhost:51520/api/Values/AddMessage?message=${this.state.message}&userReceive=${this.state.userRevice}`, {
        isRequiredAuth: true
      })
      .then(resp => {
        //console.log(resp);
      })
      .catch(error => {
       // console.log(error);
      });
  };

  render() {
    return (
      <div>
        <span>Message: </span>
        <input
         
          onChange={evt => this.updateMessageValue(evt)}
          type="text"
        />
        <br />

        <span>User Receive: </span>
        <input
       
          onChange={evt => this.updateUserReceiveValue(evt)}
          type="text"
        />

        <button onClick={() => this.click()}>AddMessage</button>
      </div>
    );
  }
}

export default AddMessage;
