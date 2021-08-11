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

        const chat_ids = []
        user_profile_data.contacts.forEach((item, idx) => {
          chat_ids.push(item.chatroom_id)
        })

        dispatch(fetchChats(chat_ids))

    }).catch((error) => {
      console.log(error.message)
    })
  }
}

export function fetchChats(chat_ids) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()

    const messages = []

    // fetch messages for each of the given chat rooms and store it in an array
    chat_ids.forEach((chat_id, idx) => {
      firestore.collection("chats")
        .doc(chat_id)
        .get()
        .then(response => {
          const data = response.data()
          messages.push(data['messages'])
        }).catch(error => {
          console.log(error.message)
        })
    })

    // dispatch the FETCH_MESSAGES action to store all the messages in store
    dispatch({
      type: actionTypes.FETCH_MESSAGES,
      payload: messages
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
