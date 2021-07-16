import { useState } from "react";

function InputForm ({messages, setMessages}) {
	const [text, setText] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		let new_message = {id: messages.length+1, type: "sent", text: text}
		setMessages([...messages, new_message]);

		setText("");
	}

	const onInputChange = (event) => {
		setText(event.target.value);
	}

	return (
		<form onSubmit = {onFormSubmit}>
			<input type = "text" value = {text} onChange = {onInputChange} className = "input-box"></input>
			<button type = "submit" className = "submit-button">Send Message</button>
		</form>
		);
}

export default InputForm;