import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { FirebaseAppProvider } from "reactfire"

import './index.css';
import App from './App';
import store from "./components/redux/store"

const firebaseConfig = {
    apiKey: "AIzaSyAy9eLBk-3-m5L1jEvoUauEopCPQcaGAK4",
    authDomain: "react-messenger-clone-de74c.firebaseapp.com",
    databaseURL: "https://react-messenger-clone-de74c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-messenger-clone-de74c",
    storageBucket: "react-messenger-clone-de74c.appspot.com",
    messagingSenderId: "365687744616",
    appId: "1:365687744616:web:4f4b4c708872c8fb7373dd",
    measurementId: "G-B087CLKVJY"
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
