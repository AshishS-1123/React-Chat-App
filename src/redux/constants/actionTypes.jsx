const actionTypes = {
  // this action will allow a existing user to sign in
  SIGN_IN: "SIGN_IN",
  // this action will allow the user to create an account and then sign in
  SIGN_UP: "SIGN_UP",
  // this action will allow a signed user to sign out
  SIGN_OUT: "SIGN_OUT",
  // this action will allow us to handle if there were some errors when signing in
  ERROR_SIGN_IN: "ERROR_SIGN_IN",
  // this action will allow us to handle if there were some errors when signing up
  ERROR_SIGN_UP: "ERROR_SIGN_UP",


  // this action will allow a signed in user to send a message to another user
  POST_MESSAGE: "POST_MESSAGE",
  // this action will allow fetching all data related to chats of the current user
  FETCH_GROUP: "FETCH_GROUP"
}

export default actionTypes
