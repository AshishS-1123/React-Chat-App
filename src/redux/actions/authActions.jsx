// actions related to authentication of users
// like sign in, sign up or log out
import actionTypes from "../constants/actionTypes"

export function signInUser(userName, password) {
  // first param is the dispatch function.
  // second param is method to get state if we need to
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    // make a async call to db here, then dispatch action here

    firebase.auth().signInWithEmailAndPassword(userName, password)
        .then(result => {
            dispatch({
              type: actionTypes.SIGN_IN,
              payload: { userName, password }
            })
        })
        .catch(error => {
            dispatch({
              type: actionTypes.ERROR_SIGN_IN,
              error: "Incorrect Password"
            })
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

export function signOutUser() {
  // first param is the dispatch function.
  // second param is method to get state if we need to
  return (dispatch, getState, {getFirebase}) => {
    // make a async call to db here, then dispatch action here
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      console.log("signed out")
      dispatch({
        type: actionTypes.SIGN_OUT,
        payload: null
      })
    })
  }
}
