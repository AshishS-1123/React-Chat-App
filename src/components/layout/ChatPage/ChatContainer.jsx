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

  // get the list of all contacts this user can chat with
  const recipients = useSelector(state => state.chat.recipients)
  const chat_ids = []

  if(isLoaded(recipients)) {
    // as soon as the data loads, parse the id of all chat room's and fetch their chats
    recipients.forEach((item, idx) => {
      chat_ids.push(item.chatroom_id)
    });

    props.fetchChats(chat_ids)
  }

  return (
      <div className="ChatContainer__div">
          <SenderHeader />
          <MessageList messages={messages}></MessageList>
          <InputForm messages={messages} setMessages={setMessages}></InputForm>
      </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChats: (chat_ids) => dispatch(fetchChats(chat_ids))
  }
}

export default connect(null, mapDispatchToProps)(ChatContainer)
