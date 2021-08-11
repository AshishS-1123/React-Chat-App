import React from "react"
import { useState } from "react"
import { useSelector, connect } from "react-redux"
import { isLoaded } from 'react-redux-firebase'

import InputForm from "./ChatContainer/InputForm"
import MessageList from "./ChatContainer/MessageList"
import SenderHeader from "./SenderHeader"
import { fetchChats } from "../../../redux/actions/chatActions"

import "./ChatContainer.css"

function ChatContainer(props) {
  const chats = {messages: []}//useSelector((state) => state.chat)

	// state to store all sent and recieved messages
  const [messages, setMessages] = useState(chats.messages)

  return (
      <div className="ChatContainer__div">
          <SenderHeader />
          <MessageList messages={messages}></MessageList>
          <InputForm messages={messages} setMessages={setMessages}></InputForm>
      </div>
  );

}

export default ChatContainer
