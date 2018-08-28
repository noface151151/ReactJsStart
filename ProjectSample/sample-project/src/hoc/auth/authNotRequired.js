import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const notRequiredAuthComponent = WrappedComponent => {
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
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
        const token = localStorage.getItem("token");
        if (token !== null && !this.props.isAuthenticated) {
          this.props.onSetlocation(this.props.history.location.pathname);
          this.props.Autologin();
        }
      }
      //   componentWillUpdate(nextProps) {
      //     if (!nextProps.isAuthenticated) {
      //       this.props.onSetlocation(this.props.history.location.pathname);
      //       this.props.history.push("/Login");
      //     }
      //   }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  );
};
export default notRequiredAuthComponent;
