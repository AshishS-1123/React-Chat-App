import React from "react"
import { Card } from "@material-ui/core"
import { useSelector } from "react-redux"

import "./ChatList.css"
import SignOut from "./SignOut"

function ChatList(props) {
	const chats = useSelector((state) => state.chat)

	const chat_list_items = props.user_contacts

	const onChatClick = (e) => {

	}

	return (
		<div className='ChatList__div'>
			<h1 className='ChatList__heading'>My Chats</h1>
			<div className='ChatList__searchbar'>Search</div>
			{props.contacts && props.contacts.map((item) => {
				console.log("items")
				console.log(item)

				return (
						<Card key={item.chatroom_id}
									id={"rec_"+item.chatroom_id}
									className="ChatList__card"
									onClick={onChatClick}>
										<div className='ChatList__pic' id={"pic_"+item.chatroom_id}></div>
										<p className='ChatList__name' id={"name"+item.chatroom_id}>{item.contact_name}</p>
						</Card>
					)
				}
			)}
			<SignOut />
		</div>
	)
}

export default ChatList
