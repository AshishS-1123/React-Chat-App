import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/layout/Home"
import SignIn from "./components/layout/SignIn"
import SignUp from "./components/layout/SignUp"
import ChatList from "./components/ChatList"
import ChatContainer from "./components/ChatContainer"

import "./App.css";

function App() {
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
          <SignIn></SignIn>
        </Route>
        <Route path='/chats'>
          <div className='App__div'>
            <ChatList></ChatList>
            <ChatContainer></ChatContainer>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
