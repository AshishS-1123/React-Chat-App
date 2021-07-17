import { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

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
		<form>
		  <FormControl>
			  <InputLabel
			  	htmlFor="my-input"
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