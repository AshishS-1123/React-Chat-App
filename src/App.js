import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import firebase from "firebase/app"

import Home from "./components/layout/Home"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import ChatList from "./components/layout/ChatPage/ChatList"
import ChatContainer from "./components/layout/ChatPage/ChatContainer"

import "./App.css";

function App() {
    var auth = firebase.auth()
    auth.useEmulator("http://localhost:9099")
    //var db = firebase.firestore()
    //db.useEmulator("localhost", 8080)

  // this the recipient that the user is currently chatting with
  const [activeChat, setActiveChat] = useState(1)
  // this is the information of the user that we got they logged in
  const [userInfo, setUserInfo] = useState({name:"", email:"", password:""})

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <SignUp></SignUp>
        </Route>
        <Route path='/signin'>
          <SignIn>></SignIn>
        </Route>
        <Route exact path='/chats'>
          <div className='App__div'>
            <ChatList
                activeChat={activeChat}
                setActiveChat={setActiveChat}>
            </ChatList>
            <ChatContainer activeChat={activeChat} setActiveChat={setActiveChat}></ChatContainer>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
