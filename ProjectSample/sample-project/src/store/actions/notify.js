import * as actionTypes from "./actionTypes";
import axios from "axios";


export const Notify_GetList_Success = (data) => {
    return {
        type: actionTypes.NOTITY_GETLIST_SUCCESS,
        data:data
    }
}

export const GetNotify =()=>{
    return dispatch=>{
        axios
        .get("http://localhost:51520/api/Values/GetNotify", {
          isRequiredAuth: true
        })
        .then(resp => {
         dispatch(Notify_GetList_Success(resp.data))
        })
        .catch(error => {
          console.log(error);
        });
    }
}