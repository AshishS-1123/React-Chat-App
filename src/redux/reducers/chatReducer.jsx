import actionTypes from "../constants/actionTypes"

const initState = {
  recipients: [],
  messages: [],
  active_chat_recipient: {}
}

function chatReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.FETCH_CONTACTS:
      state = {...state,
                  recipients: action.payload.contacts,
                  active_chat_recipient: {...action.payload.contacts[0], index: 0}}
      break
    case actionTypes.FETCH_MESSAGES:
      state = {...state,
                  messages: action.payload}
      break
    case actionTypes.POST_MESSAGE:
      const index = state.active_chat_recipient.index
      const new_msg_list = state.messages

      new_msg_list[index] = action.payload.messages
      state = {...state, messages: [...new_msg_list]}
      break
    case actionTypes.ADD_RECIPIENT:
      break
    default:
  }

  return state
}

export default chatReducer
