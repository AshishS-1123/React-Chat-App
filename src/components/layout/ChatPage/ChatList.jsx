import React from "react"
import { Card } from "@material-ui/core"
import { useSelector, connect } from "react-redux"

import "./ChatList.css"

function ChatList(props) {
	const chats = useSelector((state) => state.chat)

	const chat_list_items = chats.recipients

	const onChatClick = (e) => {
		props.setActiveChat(e.target.id[4])
	}

	return (
		<div className='ChatList__div'>
			<h1 className='ChatList__heading'>My Chats</h1>
			<div className='ChatList__searchbar'>Search</div>
			{chat_list_items.map((item) => {

				return (
						<Card key={item.id}
									id={"rec_"+item.id}
									className="ChatList__card"
									onClick={onChatClick}>
										<div className='ChatList__pic' id={"pic_"+item.id}></div>
										<p className='ChatList__name' id={"name"+item.id}>{item.recipient_name}</p>
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
