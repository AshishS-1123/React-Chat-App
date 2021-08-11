import "./MessageList.css"

function MessageList({messages}) {

	return(
		<div id='MessageList__container'>
			{messages.map((message) => {
				return <div className="MessageList__card MessageList__card_sent" key = {message.id}>{message.text}</div>
			})}
		</div>
		);
}

export default MessageList;
