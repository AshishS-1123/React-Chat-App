import { useState } from "react"
import firebase from "firebase/app"
import { connect, useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

import Home from "./components/layout/Home"
import ChatList from "./components/layout/ChatPage/ChatList"
import ChatContainer from "./components/layout/ChatPage/ChatContainer"

import "./App.css";
import actionTypes from "./redux/constants/actionTypes"

function App(props) {
  let user_contacts = []

  try {
      var auth = firebase.auth()
      auth.useEmulator("http://localhost:9099")
      var db = firebase.firestore()
      db.useEmulator("localhost", 8080)
  } catch(error) {
      console.log(error.message)
  }

  // command for emulator
  // firebase emulators:start --import=./firebase-data --export-on-exit=./firebase-data

  const user_id = props.uid
  // fetch all the user prifile data and their contacts
  useFirestoreConnect([
    {collection: 'users', doc: user_id}
  ])

  // fetch the required data and wait for it to load
	const user_profile = useSelector((state) => state.firestore.ordered.users)
	if(isLoaded(user_profile)) {
    user_contacts = user_profile[0]['contacts']
	}

  if(props.isLoggedIn) {
    console.log("user already logged in")
    props.signIn(props.userName, "")
  }

  return (
    props.isLoggedIn ? (
      <div className='App__div'>
        <ChatList
            contacts={user_contacts}>
        </ChatList>
        <ChatContainer></ChatContainer>
      </div>
    ) : <Home />
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
