import React from "react"

import InputForm from "./ChatContainer/InputForm"
import MessageList from "./ChatContainer/MessageList"
import SenderHeader from "./ChatContainer/SenderHeader"

import "./ChatContainer.css"

function ChatContainer() {

  return (
      <div className="ChatContainer__div">
          <SenderHeader />
          <MessageList />
          <InputForm />
      </div>
  );

}

export default ChatContainer
