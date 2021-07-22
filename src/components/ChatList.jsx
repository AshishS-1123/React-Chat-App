import React from "react"
import { Card } from "@material-ui/core"

import chat_list_items from "../data/chat-list-contacts"
import "./ChatList.css"

function ChatList(props) {
	return (
		<div className='ChatList__div'>
			{chat_list_items.map(item => {
				return <Card
									className="ChatList__card"
									key={item.id} >
										{item.recipient_name}
							 </Card>
			}
			)}
		</div>
	)
}

export default ChatList
