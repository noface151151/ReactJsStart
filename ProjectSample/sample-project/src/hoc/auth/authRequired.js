import React, { Component } from "react";
import { connect } from "react-redux";

const requiredAuthComponent = WrappedComponent => {
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
  };
  return connect(mapStateToProps)(
    class extends Component {
      componentWillMount() {
        if (!this.props.isAuthenticated) {
          this.props.history.push("/Login");
        }
      }
      componentWillUpdate(nextProps) {
        if (!nextProps.isAuthenticated) {
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
