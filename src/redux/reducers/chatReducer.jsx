import actionTypes from "../constants/actionTypes"

const initState = {
  recipients: [],
  messages: [],
  active_chat_recipient: ""
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
      break
    case actionTypes.ADD_RECIPIENT:
      break
    default:
  }

  return state
}

export default chatReducer
