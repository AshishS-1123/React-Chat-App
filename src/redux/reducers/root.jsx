import { combineReducers } from "redux"
import { firestoreReducer } from 'redux-firestore'

import authReducer from "./authReducer"
import chatReducer from "./chatReducer"

const reducers = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  firestore: firestoreReducer
})

export default reducers
