import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import firebase from "firebase/app"
import "firebase/auth"

import './index.css';
import App from './App';
import store from "./components/redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
