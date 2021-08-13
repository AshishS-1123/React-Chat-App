import React from "react"
import { Card } from "@material-ui/core"
import { useSelector, connect } from 'react-redux'

import SignOut from "./SignOut"
import { setActiveChat } from "../../../redux/actions/chatActions"

import "./ChatList.css"

function ChatList(props) {

	const recipients = useSelector((state) => state.chat.recipients)

	const onChatClick = (e) => {
		const chatroom_id = e.target.id.slice(4)
		console.log(e.target.id);
		props.setActiveChat(chatroom_id)
	}

	return (
		<div className='ChatList__div'>
			<h1 className='ChatList__heading'>My Chats</h1>
			<div className='ChatList__searchbar'>Search</div>
			{
				recipients && recipients.map((item, index) => {
				console.log(index);
				return (
						<Card key={item.chatroom_id}
									id={"rec_"+index}
									className="ChatList__card"
									onClick={onChatClick}>
										<div className='ChatList__pic' id={"pic_"+index}></div>
										<p className='ChatList__name' id={"name"+index}>{item.contact_name}</p>
						</Card>
					)
				}
			)}
			<SignOut />
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveChat: (chat_id) => dispatch(setActiveChat(chat_id))
	}
}

export default connect(null, mapDispatchToProps)(ChatList)
