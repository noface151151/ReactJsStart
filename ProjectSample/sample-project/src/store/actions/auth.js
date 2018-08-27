import * as actionTypes from './actionTypes';
import {BASE_URL} from '../../shared/AppConfig';
import axios from 'axios';


export const authSuccess = (data) => {
    localStorage.setItem('token', data.token);
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: data.token,
        username: data.username

    }
}
export const authFail = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_FAIL

    }
}

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const login = (username, password) => {
    return dispatch => {
        const authData = {
            UserName: username,
            Password: password
        };
        axios.post(`${BASE_URL}/Token/GetToken`, authData)
            .then(resp => {
                console.log(resp)
                dispatch(authSuccess(resp.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail());
            })
    }
};
