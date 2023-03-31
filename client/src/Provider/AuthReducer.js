import * as types from "./actionTypes";

const initialState={
    isAuth:false,
    userData:""
}

const reducer=(state=initialState,action)=>{
   const {type,payload}=action;

   switch (type) {
    case types.LOGIN_SUCCESS:
        return{
            ...state,isAuth:true,userData:payload
        }
    case types.LOGOUT_SUCCESS:
        return{
            ...state,isAuth:false,userData:""
        }
    default:return initialState;
   }
}

export {reducer};