import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { getFirestore } from "redux-firestore"
import { getFirebase } from 'react-redux-firebase'

import reducers from "./reducers/root"

const composedEnhancer = compose(
                          applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })))
                         // window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(reducers, {}, composedEnhancer)

export default store
