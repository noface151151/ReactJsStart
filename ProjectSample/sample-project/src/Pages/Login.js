import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValue: "administrator",
      passWordValue: "Erp123456"
    };
  }
  updateUserNameValue(evt) {
    this.setState({
      userNameValue: evt.target.value
    });
  }
  updatePassWordValue(evt) {
    this.setState({
      passWordValue: evt.target.value
    });
  }
  Login = () => {
    this.props.onLogin(this.state.userNameValue, this.state.passWordValue);
  };
  componentWillMount(nextProps) {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.Autologin();
    }
  }
  componentWillUpdate(nextProps) {
    if (nextProps.isAuthenticated) {
      console.log('vào')
      this.props.history.push(this.props.location);
    }
  }

  render() {
    return (
      <div>
        <span>UserName: </span>
        <input
          value={this.state.userNameValue}
          onChange={evt => this.updateUserNameValue(evt)}
          type="text"
        />
        <br />
        <span>PassWord: </span>
        <input
          value={this.state.passWordValue}
          onChange={evt => this.updatePassWordValue(evt)}
          type="text"
        />
        <button onClick={() => this.Login()}>Login</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    location:state.auth.location
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (usrename, password) =>
      dispatch(actions.login(usrename, password)),
    Autologin: () => dispatch(actions.Autologin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
