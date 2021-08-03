import { useState } from "react";
import { FormControl, InputLabel, Input, IconButton } from "@material-ui/core";

import SendIcon from "../../../../resources/send-icon.svg"
import "./InputForm.css"

function InputForm ({messages, setMessages}) {

	const [text, setText] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		let new_message = {id: messages.length+1, type: "sent", text: text}
		setMessages([new_message, ...messages]);
		setText('');
	}

	const onInputChange = (event) => {
		setText(event.target.value);
	}

	return (
		<form id='InputForm__form'>
		  <FormControl id='InputForm__formcontrol'>
			  <Input
			    id="InputForm__input"
			    aria-describedby="input-for-message"
			  	value={text}
					placeholder='Enter your message here...'
			    onChange={onInputChange}
			  />

			<IconButton
			  	id='InputForm__button'
			    type='submit'
					disabled={!text}
			  	onClick={onFormSubmit}
			  >
					<img src={SendIcon} alt='send button' id='InputForm__sendicon'/>
			  </IconButton>
		  </FormControl>
		</form>
		);
}

export default InputForm;
