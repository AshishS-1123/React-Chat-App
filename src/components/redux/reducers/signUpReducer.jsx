import actionType from "../constants/actionTypes"

const initState = {
  userName: "",
  password: ""
}

function signUpReducer(state=initState, action) {
  if(action.type === actionType.SIGN_UP) {
    return state;
  }

  return state;
}

export default signUpReducer
