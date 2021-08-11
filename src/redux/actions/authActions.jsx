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
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make a async call to db here, then dispatch action here

    const firebase = getFirebase()
    const firestore = getFirestore()

    // create the user in firebase authentication.
    firebase.auth().createUserWithEmailAndPassword(userName, password)
        .then((result) => {
          // then we need to insert some data in the database relating to some meta information about the user
          const user_data = {
            contacts: [
                {chatroom_id: "", contact_id: "mK8VQkY1a46V1ypvr1txV4VTEv0j", contact_name: "Ashish Shevale"},
                {chatroom_id: "", contact_id: "E9TZsQhHXhK3z9zAKvxej6YviUli", contact_name: "Harry Potter"}
              ],
            displayName: firstName,
            email: userName
          }

          const user_id = result.user.uid

          // add the dummy data related to user in firestore
          firestore.collection('users').doc(user_id).set(user_data).then(() => {
            console.log("Added user data to database...")
          }).catch((error) => {
            console.log(error.message)
          })

          // after creating the user, log them into their account
          firebase.auth().signInWithEmailAndPassword(userName, password).then(result => {
            dispatch({
              type: actionTypes.SIGN_IN,
              payload: { userName, password }
            })
          })
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
      dispatch({
        type: actionTypes.SIGN_OUT,
        payload: null
      })
    })
  }
}
