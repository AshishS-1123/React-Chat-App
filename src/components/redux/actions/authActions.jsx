// actions related to authentication of users
// like sign in, sign up or log out
import actionTypes from "../constants/actionTypes"

function signInUser(userName, password) {

  return {
    type: actionTypes.SIGN_IN,
    payload: {
      userName: userName,
      password: password
    }
  }
}

function signUpUser(firstName, userName, password) {

  return {
    type: actionTypes.SIGN_UP,
    payload: {
      firstName: firstName,
      userName: userName,
      password: password
    }
  }
}

function signOutUser(userName) {

  return {
    type: actionTypes.SIGN_OUT,
    payload: {
      userName: userName
    }
  }
}
