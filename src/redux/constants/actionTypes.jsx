const actionTypes = {
  // this action will allow a existing user to sign in
  SIGN_IN: "SIGN_IN",
  // this action will allow the user to create an account and then sign in
  SIGN_UP: "SIGN_UP",
  // this action will allow a signed user to sign out
  SIGN_OUT: "SIGN_OUT",

  // this action will allow a signed in user to send a message to another user
  POST_MESSAGE: "POST_MESSAGE",
  // this action will allow a signed user to recieve and see the chats from another user
  REQUEST_MESSAGES: "REQUEST_MESSAGES"
}

export default actionTypes
