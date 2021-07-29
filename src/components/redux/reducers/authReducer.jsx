import actionType from "../constants/actionTypes"

const initState = {
  userInfo: "Harry Potter",
  userName: "harry@gail.com",
  password: "test@123"
}

function authReducer(state=initState, action) {

  switch(action.type) {
    case actionType.SIGN_IN:
      break
    case actionType.SIGN_UP:
      break
    case actionType.SIGN_OUT:
      break
     default:
      break
  }

  return state;
}

export default authReducer
