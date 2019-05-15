import * as actionTypes from "./actionTypes";
import axios from "axios";


export const Permission_Get_Success = (data) => {
    return {
        type: actionTypes.PERMISSION_GET_SUCCESS,
        data:data
    }
}

export const GetPermission =()=>{
    return dispatch=>{
        axios
        .get("http://localhost:51520/api/Values/GetPermission", {
          isRequiredAuth: true
        })
        .then(resp => {
            console.log(resp);
         dispatch(Permission_Get_Success(resp.data))
        })
        .catch(error => {
          console.log(error);
        });
    }
}