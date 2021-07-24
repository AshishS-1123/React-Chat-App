import actionType from "../constants/actionTypes"

const initState = {
  userName: "",
  password: ""
}

function signInReducer(state=initState, action) {
  if(action.type === actionType.SIGN_IN) {
    return state;
  }

  return state;
}

export default signInReducer
