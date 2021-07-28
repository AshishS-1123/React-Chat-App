import actionType from "../constants/actionTypes"

const initState = {
  userName: "",
  password: ""
}

function authReducer(state=initState, action) {

  switch(action.type) {
    case actionType.SIGN_IN:
      break
    case actionType.SIGN_UP:
      break
    case actionType.SIGN_OUT:
      break
  }

  return state;
}

export default authReducer
