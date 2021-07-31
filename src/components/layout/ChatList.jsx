import React from "react"
import { Card } from "@material-ui/core"
import { connect } from "react-redux"

import chat_list_items from "../../data/chat-list-contacts"
import "./ChatList.css"

function ChatList(props) {
	const onChatClick = (e) => {
		const activeElement = document.getElementById("rec_"+props.activeChat)
		activeElement.classList.remove("active")

		e.target.classList.add("active")

		props.setActiveChat(e.target.id[4])
	}

	return (
		<div className='ChatList__div collection'>
			{chat_list_items.map((item) => {
				const active = props.activeChat === item.id ? " active" : ""

				return (
						<Card key={item.id}
									id={"rec_"+item.id}
									className={"ChatList__card collection-item" + active}
									onClick={onChatClick}>
							{item.recipient_name}
						</Card>
				)
			}
		)}
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo,
    userName: state.auth.userName,
    password: state.auth.password
  }
}

export default connect(mapStateToProps)(ChatList)
