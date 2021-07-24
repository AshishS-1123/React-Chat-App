import { combineReducers } from "redux"

import signInReducer from "./signInReducer"
import signOutReducer from "./signOutReducer"
import signUpReducer from "./signUpReducer"

const reducers = combineReducers({
  signIn: signInReducer,
  signOut: signOutReducer,
  signUp: signUpReducer
})

export default reducers
