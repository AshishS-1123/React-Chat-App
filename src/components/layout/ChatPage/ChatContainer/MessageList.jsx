import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

import "./MessageList.css"

function MessageList() {

  const active = useSelector(state => state.chat.active_chat_recipient.index)
  const message_list = useSelector(state => state.chat.messages)
	const user_id = useSelector(state => state.firebase.auth.uid)

	let messages = []

  if(isLoaded(active) && isLoaded(message_list)) {
    messages = message_list[active]
  }


	return(
		<div id='MessageList__container'>
			{messages && messages.map((message, id) => {
				const classes = (message.sent_by === user_id) ? "MessageList__card MessageList__card_sent" : "MessageList__card"
				return <div className={classes} key = {id}>{message.text}</div>
			})}
		</div>
		);
}

export default MessageList;
