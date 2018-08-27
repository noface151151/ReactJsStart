import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const requiredAuthComponent = WrappedComponent => {
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onSetlocation: (location) => dispatch(actions.setLocation(location))
    };
  };
  return connect(mapStateToProps,mapDispatchToProps)(
    class extends Component {
      componentWillMount() {
        if (!this.props.isAuthenticated) {
          this.props.onSetlocation(this.props.history.location.pathname);
          this.props.history.push("/Login");
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
export default requiredAuthComponent;
