import React from "react"
import { useState, useEffect } from "react"

import InputForm from "../chats/InputForm";
import MessageList from "../chats/MessageList";

import "./ChatContainer.css"
import message_list from "../../data/messages"

function ChatContainer(props) {
  const {activeChat, setActiveChat} = props
	// state to store all sent and recieved messages
  const [messages, setMessages] = useState([]);

  // when the active chat changes, we need to reload the  messages from that sender
  useEffect(() => {
    setMessages(message_list[parseInt(activeChat)-1])
  }, [activeChat])

  return (
      <div className="ChatContainer__div">
            <MessageList messages={messages}></MessageList>
            <InputForm messages={messages} setMessages={setMessages} />
      </div>
  );

}

export default ChatContainer
