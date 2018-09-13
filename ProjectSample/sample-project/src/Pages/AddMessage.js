import React, { Component } from "react";
import axios from "axios";

class AddMessage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      message: ""
    };
  }
  updateMessageValue(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  click = () => {
    axios
      .get(`http://localhost:51520/api/Values/AddMessage?message=${this.state.message}&userRevice=administrator`, {
        isRequiredAuth: true
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <span>Message: </span>
        <input
          value={this.state.userNameValue}
          onChange={evt => this.updateMessageValue(evt)}
          type="text"
        />
        <button onClick={() => this.click()}>AddMessage</button>
      </div>
    );
  }
}

export default AddMessage;
