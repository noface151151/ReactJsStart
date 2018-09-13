import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
window.jQuery = $;
require("signalr");

class Header extends Component {
  constructor(props) {
    super(props);

    //  console.log(props);
    this.state = {
      countMessage: 0,
      hubConnection: null
    };
  }
  componentDidMount() {
    // if (this.props.isAuthenticated) {
    const NotifyServerUrl = "http://localhost:51520/";
    const NotifyUrl = NotifyServerUrl + "signalr";
    let SignalrConnection = $.hubConnection(NotifyUrl, {
      useDefaultPath: false
    });
    let NotifyProxy = SignalrConnection.createHubProxy("MyHub");
    NotifyProxy.on("notify", userRevice => {
      if (userRevice === this.props.username) {
        axios
          .get("http://localhost:51520/api/Values/GetNotify", {
            isRequiredAuth: true
          })
          .then(resp => {
            this.setState({ countMessage: resp.data.CountMessage });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });

    SignalrConnection.start()
      .done(function() {
        console.log("Connected to Signalr Server");
      })
      .fail(function() {
        console.log("failed in connecting to the signalr server");
      });
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isAuthenticated) {
      //     let hubConnection = new HubConnectionBuilder().withUrl("http://localhost:51520/MyHub").build();
      //    // console.log(hubConnection);
      //  //   this.setState({ hubConnection: hubConnection });
      //    // console.log(this.state.hubConnection);
      //     // hubConnection
      //     //   .start()
      //     //   .then(() => console.log("Connection started!"))
      //     //   .catch(err => console.log("Error while establishing connection"));
      //     hubConnection.on("notify", userRevice => {
      //       console.log(userRevice);
      //       axios
      //         .get("http://localhost:51520/api/Values/GetNotify", {
      //           isRequiredAuth: true
      //         })
      //         .then(resp => {
      //           console.log(resp);
      //         })
      //         .catch(error => {
      //           console.log(error);
      //         });
      //     });
      //     console.log(hubConnection)
      //     hubConnection
      //     .start()
      //     .then(() => console.log("Connection started!"))
      //     .catch(err => console.log("Error while establishing connection"));
      // const NotifyServerUrl = "http://localhost:51520/";
      // const NotifyUrl = NotifyServerUrl + "signalr";
      // let SignalrConnection = $.hubConnection(NotifyUrl, {
      //   useDefaultPath: false
      // });
      // // let NotifyProxy = SignalrConnection.createHubProxy("MyHub");
      // console.log(SignalrConnection);
      // SignalrConnection.start({ jsonp: true })
      //   .done(function() {
      //     alert("Connected to Signalr Server");
      //   })
      //   .fail(function() {
      //     alert("failed in connecting to the signalr server");
      //   });
    }
  }
  render() {
    return <div>Count:{this.state.countMessage}</div>;
  }
}
export default Header;
