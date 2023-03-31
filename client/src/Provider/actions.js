import * as types from "./actionTypes";

export const LoginSuccess=(data)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload:data
    }
}

export const LogoutSuccess=()=>{
    return{
        type:types.LOGOUT_SUCCESS
    }
}