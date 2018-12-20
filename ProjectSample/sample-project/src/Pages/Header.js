import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
class Header extends Component {
  componentDidMount() {
    // if (this.props.isAuthenticated) {
    this.props.GetNotify();

    // axios
    //   .get("http://localhost:51520/api/Values/GetNotify", {
    //     isRequiredAuth: true
    //   })
    //   .then(resp => {
    //     // console.log(resp);
    //     this.setState({ countMessage: resp.data.length });
    //     this.setState({ Notifies: resp.data });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // const NotifyServerUrl = "http://localhost:51520/";
    // const NotifyUrl = NotifyServerUrl + "signalr";
    // let SignalrConnection = $.hubConnection(NotifyUrl, {
    //   useDefaultPath: false
    // });
    // let NotifyProxy = SignalrConnection.createHubProxy("MyHub");

    // NotifyProxy.on("broadcastNotify", totalNotif => {
    //   this.setState({ countMessage: totalNotif });
    //   axios
    //     .get("http://localhost:51520/api/Values/GetNotify", {
    //       isRequiredAuth: true
    //     })
    //     .then(resp => {
    //       // console.log(resp);
    //       this.setState({ Notifies: resp.data });
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // });
    // const token = localStorage.getItem("token");
    // SignalrConnection.qs = { Token: token };
    // SignalrConnection.start()
    //   .done(function() {
    //     console.log("Connected to Signalr Server");
    //   })
    //   .fail(function() {
    //     console.log("failed in connecting to the signalr server");
    //   });
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isAuthenticated) {
    }
  }
  render() {
    const NotifyList =
      this.props.notify === null
        ? null
        : this.props.notify.map((value, index) => {
            return <li key={value.GUI}>{value.Content}</li>;
          });
    return (
      <div>
        Count:{this.props.totalNotify}
        <br />
        <ul>{NotifyList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notify: state.notify.notify_list,
    totalNotify: state.notify.totalNotify
  };
};
const mapDispatchToProps = dispatch => {
  return {
    GetNotify: () => dispatch(actions.GetNotify())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
