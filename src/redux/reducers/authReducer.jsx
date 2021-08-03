import actionType from "../constants/actionTypes"

const initState = {
  userInfo: "",
  userName: "",
  password: "",
  authError: null
}

function authReducer(state=initState, action) {

  switch(action.type) {
    case actionType.SIGN_IN:
      state = {...state,
                  userName: action.payload.userName,
                  password: action.payload.password,
                  authError: null
              }
      break
    case actionType.ERROR_SIGN_IN:
      state = {...state, authError: "LOGIN FAILED"}
      break
    case actionType.SIGN_OUT:
      state = {...state, userName: "", password: "", authError: null}
     default:
      break
  }

  return state;
}

export default authReducer
