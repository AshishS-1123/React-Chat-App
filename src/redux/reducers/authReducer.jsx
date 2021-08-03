import actionType from "../constants/actionTypes"

const initState = {
  userInfo: "Harry Potter",
  userName: "harry@gail.com",
  password: "test@123",
  authError: null
}

function authReducer(state=initState, action) {

  switch(action.type) {
    case actionType.SIGN_IN:
      console.log("singin in success");
      break
    case actionType.ERROR_SIGN_IN:
      console.log("some error on signup")
      state = {...state, authError: "LOGIN FAILED"}
      break
    case actionType.SIGN_IN_SUCCESS:
      console.log("sigin in was successful")
      state = {...state, authError: null}
      break
     default:
      break
  }

  return state;
}

export default authReducer
