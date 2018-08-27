import * as actionTypes from "../actions/actionTypes";

const initState = {
  token: null,
  username: null,
  loading: false,
  isAuthenticated: false
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    username: action.username,
    loading: false,
    isAuthenticated: true
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    token: null,
    username: null,
    loading: false,
    isAuthenticated: false
  };
};
const setAuthenticate = state => {
  return {
    ...state,
    token: localStorage.getItem("token"),
    loading: false,
    isAuthenticated: true
  };
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_ISAUTHENTICATE:
      return setAuthenticate(state);
    default:
      return state;
  }
};

export default reducer;
