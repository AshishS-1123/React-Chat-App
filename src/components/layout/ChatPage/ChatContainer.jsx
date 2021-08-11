import React from "react"
import { useState } from "react"
import { useSelector, connect } from "react-redux"
import { isLoaded } from 'react-redux-firebase'

import InputForm from "./ChatContainer/InputForm"
import MessageList from "./ChatContainer/MessageList"
import SenderHeader from "./SenderHeader"
import { fetchChats } from "../../../redux/actions/chatActions"

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
