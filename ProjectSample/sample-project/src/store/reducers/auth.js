import * as actionTypes from "../actions/actionTypes";

const initState = {
  token: null,
  username: null,
  loading: false,
  isAuthenticated: false,
  permision: null,
  location: "/NotRequiredAuth"
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    username: action.username,
    loading: false,
     isAuthenticated: true,
    // permision: action.permision
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    token: null,
    username: null,
    loading: false,
    isAuthenticated: false,
    permision: null
  };
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
    case actionTypes.AUTH_AUTOLOGIN_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
    case actionTypes.AUTH_LOGOUT:
      return authFail(state, action);
    case actionTypes.AUTH_SET_LOCATION:
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
};

export default reducer;
