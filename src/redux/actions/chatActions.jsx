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

          // if we are currently processing the last chatroom id,
          // then dispatch the FETCH_MESSAGES action to save thses values in store
          if(messages.length === chat_ids.length) {
            // dispatch the FETCH_MESSAGES action to store all the messages in store
            dispatch({
              type: actionTypes.FETCH_MESSAGES,
              payload: messages
            })
          }
        }).catch(error => {
          console.log(error.message)
        })
    })
  }
}

export function postMessage(message) {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()
    const state = getState()

    const active_chat_id = state.chat.active_chat_recipient.chatroom_id
    const user_id = state.firebase.auth.uid;
    const message_object = {sent_by: user_id, text: message}

    //firestore.collection('chats').doc(active_chat_id).update({
    firestore.collection('chats').doc(active_chat_id).get().then(response => {
        const messages = response.data();
        const new_messages = [...messages.messages, message_object]

        firestore.collection('chats').doc(active_chat_id).set({messages: new_messages}).then(() => {
            const element = document.getElementById("MessageList__container")
            element.scrollTop = element.scrollHeight;

            dispatch({
              type: actionTypes.POST_MESSAGE,
              payload: {messages: new_messages}
            })
        })
    })
  }
}

export function setActiveChat(chat_id) {
  return {
    type: actionTypes.SET_ACTIVE_CHAT,
    payload: chat_id
  }
}
