import { useState } from "react"
import firebase from "firebase/app"
import { connect } from 'react-redux'

import Home from "./components/layout/Home"
import ChatList from "./components/layout/ChatPage/ChatList"
import ChatContainer from "./components/layout/ChatPage/ChatContainer"

import "./App.css";
import actionTypes from "./redux/constants/actionTypes"

function App(props) {

  var auth = firebase.auth()
  auth.useEmulator("http://localhost:9099")
  var db = firebase.firestore()
  db.useEmulator("localhost", 8080)

  // this the recipient that the user is currently chatting with
  const [activeChat, setActiveChat] = useState(1)
  // this is the information of the user that we got they logged in
  

  if(props.isLoggedIn) {
    console.log("user already logged in")
    props.signIn(props.userName, "")
  }

  return (
    props.isLoggedIn ? (
      <div className='App__div'>
        <ChatList
            activeChat={activeChat}
            setActiveChat={setActiveChat}>
        </ChatList>
        <ChatContainer activeChat={activeChat} setActiveChat={setActiveChat}></ChatContainer>
      </div>
    ) : <Home />
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.email,
    userName: state.firebase.auth.email,
    name: state.firebase.auth.displayName
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
