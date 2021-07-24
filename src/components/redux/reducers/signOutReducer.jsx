import actionType from "../constants/actionTypes"

const initState = {
  userName: "",
  password: ""
}

function signOutReducer(state=initState, action) {
  if(action.type === actionType.SIGN_OUT) {
    return state;
  }

  return state;
}

export default signOutReducer
