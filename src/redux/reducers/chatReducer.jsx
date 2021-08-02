import actionTypes from "../constants/actionTypes"

// each item in messages will represent a message from some user.
// structure of each message will be
// { sender: "", message: "", timestamp: "" }
const initState = {
  recipients: [],
  messages: []
}

function chatReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.POST_MESSAGE:
      break
    case actionTypes.ADD_RECIPIENT:
      break
    default:
  }

  return state
}

export default chatReducer
