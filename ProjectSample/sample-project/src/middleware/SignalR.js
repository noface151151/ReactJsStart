import * as actions from "../store/actions/index";
import * as actionType from "../store/actions/actionTypes";
import $ from "jquery";
window.jQuery = $;
require("signalr");

const NotifyServerUrl = "http://localhost:51520/";
const NotifyUrl = NotifyServerUrl + "signalr";
let SignalrConnection = $.hubConnection(NotifyUrl, {
  useDefaultPath: false
});

export const signalRRegistration = store => next => action => {
  if (
    action.type === actionType.AUTH_AUTOLOGIN_SUCCESS ||
    action.type === actionType.AUTH_SUCCESS
  ) {
    let NotifyProxy = SignalrConnection.createHubProxy("MyHub");

    NotifyProxy.on("broadcastNotify", function(totalNotif) {
      store.dispatch(actions.GetNotify());
    });

    SignalrConnection.stop();
    const token = localStorage.getItem("token");
    SignalrConnection.qs = { Token: token };
    SignalrConnection.start()
      .done(function() {
        console.log("Now connected, connection ID=" + SignalrConnection.id);
      })
      .fail(function() {
        console.log("Could not connect");
        window.alert("Unable to start signalR connection...");
      });
  }
  next(action);
};
