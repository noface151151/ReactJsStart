import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import * as cookieService from '../../Service/cookieservice';

const notRequiredAuthComponent = WrappedComponent => {
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      // location:state.auth.location
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      Autologin: () => dispatch(actions.Autologin()),
      onSetlocation: path => dispatch(actions.setLocation(path))
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
      componentWillMount() {
        //const token = localStorage.getItem("token");
       // const token = cookieService.getCookie('tokenInfo');
        if ( !this.props.isAuthenticated) {
          this.props.onSetlocation(this.props.history.location.pathname);
          this.props.Autologin();
        }
      }
        componentWillUpdate(nextProps) {
          if (!nextProps.isAuthenticated) {
            this.props.onSetlocation(this.props.history.location.pathname);
            this.props.history.push("/Login");
          }
        }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  );
};
export default notRequiredAuthComponent;
