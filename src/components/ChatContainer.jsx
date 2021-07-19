import React from "react"
import { useState } from "react"

import InputForm from "./InputForm";
import MessageList from "./MessageList";

import "./ChatContainer.css"

function ChatContainer(props) {

	// state to store all sent and recieved messages
  const [messages, setMessages] = useState([]);

  return (
    <div className="ChatContainer__div">
      <MessageList messages={messages}></MessageList>
      <InputForm messages = {messages} setMessages = {setMessages}/>
    </div>
  );

}

export default ChatContainer