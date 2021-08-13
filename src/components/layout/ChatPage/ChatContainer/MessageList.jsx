import React from 'react'
import { useSelector, connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

import "./MessageList.css"

function MessageList({user_id, active, message_list}) {

	return(
		<div id='MessageList__container'>
			{message_list && message_list[active] && message_list[active].map((message, id) => {
				const classes = (message.sent_by === user_id) ? "MessageList__card MessageList__card_sent" : "MessageList__card"
				return <div className={classes} key = {id}>{message.text}</div>
			})}
		</div>
		);
}

const mapStateToProps = (state) => {
  return {
    user_id: state.firebase.auth.uid,
    active: state.chat.active_chat_recipient.index,
    message_list: state.chat.messages
  }
}

export default connect(mapStateToProps)(MessageList)
