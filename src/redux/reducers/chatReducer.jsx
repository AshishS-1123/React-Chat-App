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
    case actionTypes.SET_ACTIVE_CHAT:
      console.log(action);
      const new_active_chat_recipient = {...state.active_chat_recipient,
                                        index: action.payload,
                                        contact_name: state.recipients[action.payload].contact_name,
                                        contact_email: state.recipients[action.payload].contact_email,
                                        contact_id: state.recipients[action.payload].contact_id,
                                        chatroom_id: state.recipients[action.payload].chatroom_id
                                    }
      state = {...state, active_chat_recipient: {...new_active_chat_recipient} }
      break
    case actionTypes.ADD_RECIPIENT:
      break
    default:
  }

  return state
}

export default chatReducer
