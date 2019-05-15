import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import * as cookieService from '../../Service/cookieservice';

const requiredAuthComponent = (WrappedComponent,isRequiredAuth) => {
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      Autologin: () => dispatch(actions.Autologin()),
      onSetlocation: location => dispatch(actions.setLocation(location))
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
      componentWillMount() {
        if (!this.props.isAuthenticated) {
          this.props.onSetlocation(this.props.history.location.pathname);
          if(isRequiredAuth){
            this.props.Autologin();
          }
         // const token = localStorage.getItem("token");
       // const token = cookieService.getCookie('tokenInfo');
       // console.log(token)
         // if (token !== null) {
           
          // } else if(isRequiredAuth) {
          //   this.props.history.push("/Login");
          // }
        }
      }
      componentWillUpdate(nextProps) {
        if (!nextProps.isAuthenticated) {
          this.props.onSetlocation(this.props.history.location.pathname);
         // const token = cookieService.getCookie('tokenInfo');
         // if (token !== null) {
          if(isRequiredAuth){
            this.props.Autologin();
          }
          // } else if(isRequiredAuth) {
          //   this.props.history.push("/Login");
          // }
        }
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  );
};
export default requiredAuthComponent;
