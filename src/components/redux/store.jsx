import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import reducers from "./reducers/root"

const composedEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

const store = createStore(reducers, {}, composedEnhancer)

export default store
