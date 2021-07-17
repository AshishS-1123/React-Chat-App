import { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

import "./InputForm.css"

function InputForm ({messages, setMessages}) {
	const [text, setText] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		console.log(text);

		let new_message = {id: messages.length+1, type: "sent", text: text}
		setMessages([...messages, new_message]);
		setText('');
	}

	const onInputChange = (event) => {
		setText(event.target.value);
	}

	return (
		<form id='InputForm__form'>
		  <FormControl>
			  <InputLabel
			  	id='InputForm__label'
			  	htmlFor="InputForm__input"
			  >
			  		Enter Your Message
			  </InputLabel>

			  <Input 
			    id="InputForm__input"
			    aria-describedby="input-for-message"
			  	value={text}
			    onChange={onInputChange}
			  />

			  <Button 
			  	id='InputForm__button'
			  	variant='outlined' 
			  	color='primary'
			    type='submit' 
			  	onClick={onFormSubmit}
			  >
			  	    Send
			  </Button>
		  </FormControl>
		</form>
		);
}

export default InputForm;