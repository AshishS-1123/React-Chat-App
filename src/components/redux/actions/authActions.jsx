// actions related to authentication of users
// like sign in, sign up or log out
import actionTypes from "../constants/actionTypes"

export function signInUser(userName, password) {
  // first param is the dispatch function.
  // second param is method to get state if we need to
  return (dispatch, getState) => {
    // make a async call to db here, then dispatch action here
    /*
    await firebase.auth().signInWithEmailAndPassword(info.email, info.password)
        .then(result => {
            if(!result.user.emailVerified) {
                firebase.auth().signOut();
            }
        })
        .catch(error => {
            console.log(error)
        })
    */

    dispatch({
      type: actionTypes.SIGN_IN,
      payload: {
        userName: userName,
        password: password
      }
    })
  }
}

export function signUpUser(firstName, userName, password) {
  // first param is the dispatch function.
  // second param is method to get state if we need to
  return (dispatch, getState) => {
    // make a async call to db here, then dispatch action here

    dispatch({
      type: actionTypes.SIGN_UP,
      payload: {
        firstName: firstName,
        userName: userName,
        password: password
      }
    })
  }
}

export function signOutUser(userName) {
  // first param is the dispatch function.
  // second param is method to get state if we need to
  return (dispatch, getState) => {
    // make a async call to db here, then dispatch action here

    dispatch({
      type: actionTypes.SIGN_OUT,
      payload: {
        userName: userName
      }
    })
  }
}
