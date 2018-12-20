import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import NetworkService from "./Service/Net-work-service";
import authReducer from "./store/reducers/auth";
import notifyReducer from './store/reducers/notify';
import * as SignalRMiddleware from './middleware/SignalR'

const composeEnhancers = compose
  // process.env.NODE_ENV === "development"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  notify:notifyReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk,SignalRMiddleware.signalRRegistration))
);
//NetworkService.setupInterceptors(store);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
