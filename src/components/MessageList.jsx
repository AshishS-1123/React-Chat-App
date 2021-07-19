import { Card } from "@material-ui/core";

import "./MessageList.css"

function MessageList({messages}) {
	return(
		<div id='MessageList__container'>
			{messages.map((message) => {
				return <Card className="MessageList__card" key = {message.id}>{message.text}</Card>
			})}
		</div>
		);
}

export default MessageList;