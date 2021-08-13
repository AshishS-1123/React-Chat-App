import { useState } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import { connect } from 'react-redux'

import SendIcon from "../../../../resources/send-icon.svg"
import { postMessage } from '../../../../redux/actions/chatActions'

import "./InputForm.css"

function InputForm (props) {

	const [text, setText] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		let new_message = {id: 0, type: "sent", text: text}
		//setMessages([new_message, ...messages]);
		props.postMessage(text)
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
					<img src={SendIcon} alt='send message' id='InputForm__sendicon'/>
			  </IconButton>
		  </FormControl>
		</form>
		);
}

const mapDispatchToProps = (dispatch) => {
	return {
		postMessage: (message) => dispatch(postMessage(message))
	}
}

export default connect(null, mapDispatchToProps)(InputForm)
