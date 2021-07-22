import React from "react"
import { Card } from "@material-ui/core"
import { Link } from "react-router-dom"

import chat_list_items from "../data/chat-list-contacts"
import "./ChatList.css"

function ChatList(props) {
	return (
		<div className='ChatList__div'>
			{chat_list_items.map((item) => {
				return (
					<Link to={item.url}>
						<Card className="ChatList__card">
							{item.recipient_name}
						</Card>
					</Link>
				)
			}
		)}
		</div>
	)
}

export default ChatList
