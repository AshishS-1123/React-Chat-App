import actionTypes from "../constants/actionTypes"

const initState = {
  recipients: [
    {
      id: 1,
      recipient_name: "Chandler Bing"
    },
    {
      id: 2,
      recipient_name: "Monica Geller"
    },
    {
      id: 3,
      recipient_name: "Phoebe Buffay"
    },
    {
      id: 4,
      recipient_name: "Ross Geller"
    },
    {
      id: 5,
      recipient_name: "Rachel Green"
    }
  ],
  messages: [
    {
      id: 1,
      text: "hi"
    },
    {
      id: 2,
      text: "how are you"
    }
  ]
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
