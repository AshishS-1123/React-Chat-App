import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/layout/Home"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import ChatList from "./components/layout/ChatList"
import ChatContainer from "./components/layout/ChatContainer"

import "./App.css";

function App() {
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
          <SignUp setUserInfo={setUserInfo}></SignUp>
        </Route>
        <Route path='/signin'>
          <SignIn setUserInfo={setUserInfo}></SignIn>
        </Route>
        <Route exact path='/chats'>
          <div className='App__div'>
            <ChatList setActiveChat={setActiveChat}></ChatList>
            <ChatContainer activeChat={activeChat} setActiveChat={setActiveChat}></ChatContainer>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
