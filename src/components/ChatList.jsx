import React from "react"
import { Card } from "@material-ui/core"

import chat_list_items from "../data/chat-list-contacts"
import "./ChatList.css"

function ChatList(props) {
	const onChatClick = (e) => {
		props.setActiveChat(e.target.id[4])
	}
	return (
		<div className='ChatList__div collection'>
			{chat_list_items.map((item) => {
				return (
						<Card key={item.id}
									id={"rec_"+item.id}
									className="ChatList__card collection-item active"
									onClick={onChatClick}>
							{item.recipient_name}
						</Card>
				)
			}
		)}
		</div>
	)
}

export default ChatList
