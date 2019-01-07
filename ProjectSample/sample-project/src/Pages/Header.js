import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import axios from 'axios';
class Header extends Component {
  state={

  }
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

    // const promise1 = axios.get('http://586c926d6d271c1200d51f8f.mockapi.io/api/employees')
    // const promise2 = axios.get(' http://586c926d6d271c1200d51f8f.mockapi.io/api/product')
    // let data = {};
    // const indexToName = ['employees', 'product'];
    // Promise.all([promise1, promise2]).then((values) => {
    //   values.map((value, index) => {
    //     data[indexToName[index]] = value.data;
    //   })
    //   this.setState({
    //     data: data
    //   });
    // })
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isAuthenticated) {
    }
  }
  render() {
    console.log(this.state)
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
