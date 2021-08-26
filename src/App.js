import React from "react"
import firebase from "firebase/app"
import { connect } from 'react-redux'

import Home from "./components/layout/Home"
import ChatPage from "./components/layout/ChatPage"

import "./App.css";
import actionTypes from "./redux/constants/actionTypes"

function App(props) {

  try {
      var auth = firebase.auth()
      //auth.useEmulator("http://localhost:9099")
      var db = firebase.firestore()
      //db.useEmulator("localhost", 8080)
  } catch(error) {
      console.log(error.message)
  }

  // command for emulator
  // firebase emulators:start --import=./firebase-data --export-on-exit=./firebase-data

  if(props.isLoggedIn) {
    console.log("user already logged in")
    props.signIn(props.userName, "")
  }

  return (
    props.isLoggedIn ? <ChatPage /> : <Home />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.email,
    userName: state.firebase.auth.email,
    uid: state.firebase.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userName, password) => dispatch({
      type: actionTypes.SIGN_IN,
      payload: {userName, password}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
