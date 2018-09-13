import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class LoginSingle extends Component {
  constructor(props) {
    super(props);
  //  console.log(props)
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
  componentWillMount() {
 //   console.log('willMount')
    if(this.props.isAuthenticated){
      this.props.history.push('/NotRequiredAuth');
      return;
    }
  
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.Autologin();
    }
  }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  componentWillUpdate(nextProps) {
    //console.log('componentWillUpdate',nextProps)
    if (nextProps.isAuthenticated) {
      this.props.history.push(this.props.location);
    }
  }
  // componentWillReceiveProps(nextProps){
  //   console.log('componentWillReceiveProps',nextProps)
  // }
  // componentDidMount(){
  //   console.log('componentDidMount')
  // }
  render() {
    console.log('render')
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginSingle);





