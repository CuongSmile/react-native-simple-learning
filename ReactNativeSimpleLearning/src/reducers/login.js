import * as actionType from "../actions/login"

const initialState = {
    loginData:{},
    isLoginDoing : false,
    isLoginSuccess : false,
    username :"",
    password : "",
    error : {},
}

export default function(state = initialState , action ={}){
   switch(action.type){
       case actionType.LOGIN:{
            return {
                ...state,
                username: action.username,
                password: action.password,
                isLoginDoing : true
            }
       }
       case actionType.LOGIN_SUCCESS:{
            return {
                ...state,
                loginData: action.loginData,
                isLoginDoing : false,
                isLoginSuccess : true
            }
       }
       case actionType.LOGIN_FAIL:{
            return {
                ...state,
                isLoginDoing : false,
                isLoginSuccess : false,
                error : action.error
            }
       }
       default :{
           return state
       }
   }
}
