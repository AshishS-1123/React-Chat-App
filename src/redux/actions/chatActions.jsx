import actionTypes from "../constants/actionTypes"

export function fetchContacts() {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    // fetch the users information
    firestore.collection('users')
      .doc(getState().firebase.auth.uid)
      .get()
      .then((response) => {
        const user_profile_data = response.data()

        // then dispatch action to save all this data in the store
        dispatch({
          type: actionTypes.FETCH_CONTACTS,
          payload: user_profile_data
        })
    }).catch((error) => {
      console.log(error.message)
    })
  }
}

export function postMessage(reciever, message) {

  return (dispatch, getState) => {

    dispatch({
      type: actionTypes.POST_MESSAGE,
      payload: {
        reciever,
        message
      }
    })
  }
}
