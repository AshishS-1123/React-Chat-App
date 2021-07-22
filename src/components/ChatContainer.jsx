import React from "react"
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import InputForm from "./chats/InputForm";
import MessageList from "./chats/MessageList";

import "./ChatContainer.css"

function ChatContainer(props) {

	// state to store all sent and recieved messages
  const [messages, setMessages] = useState([]);

  return (
    <Router>
      <div className="ChatContainer__div">
        <Switch>
          <Route path="/chats/monica">
            <div>
            <MessageList messages={messages}></MessageList>
            <InputForm messages = {messages} setMessages = {setMessages}/>
            </div>
          </Route>
          <Route path="/chats/chandler">
            <MessageList messages={messages}></MessageList>
            <InputForm messages = {messages} setMessages = {setMessages}/>
          </Route>
          <Route path="/chats/phoebe">
            <MessageList messages={messages}></MessageList>
            <InputForm messages = {messages} setMessages = {setMessages}/>
          </Route>
          <Route path="/chats/ross">
            <MessageList messages={messages}></MessageList>
            <InputForm messages = {messages} setMessages = {setMessages}/>
          </Route>
          <Route path="/chats/rachel">
            <MessageList messages={messages}></MessageList>
            <InputForm messages = {messages} setMessages = {setMessages}/>
          </Route>
        </Switch>
      </div>
  </Router>
  );

}

export default ChatContainer
