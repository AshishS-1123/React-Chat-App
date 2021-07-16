import { Fragment } from "react";

function MessageList({messages}) {
	return(
		<Fragment>
			{messages.map((message) => {
				return <p className = {"message_"+ message.type} key = {message.id}>{message.text}</p>
			})}
		</Fragment>
		);
}

export default MessageList;