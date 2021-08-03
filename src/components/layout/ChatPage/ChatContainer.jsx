import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

import InputForm from "./ChatContainer/InputForm"
import MessageList from "./ChatContainer/MessageList"
import SenderHeader from "./SenderHeader"

import "./ChatContainer.css"
import message_list from "../../../data/messages"

function ChatContainer(props) {
  const chats = useSelector((state) => state.chat)

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
