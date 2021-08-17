import React, { useState } from "react"
import { Card, FormControl, InputLabel, Input, Button } from "@material-ui/core"
import { connect } from "react-redux"

import { signUpUser } from "../../redux/actions/authActions.jsx"
import "./Auth.css"

function SignUp(props) {
  const [info, setInfo] = useState({email: "", password: "", name: ""})

  const onInputChange = (e) => {
    setInfo({...info, [e.target.id]: e.target.value})
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()

    //props.signUpUser(info.name, info.email, info.password)
    const alert_msg = "\nThis is a demo project so creating new accounts is not allowed.\nYou can always sign in using the following credentials-\n\nUsername: ross_geller@friends.com\nPassword: Test@1234\n\nUsername: monica_geller@friends.com\nPassword: Test@1234\n\nUsername: chandler_bing@friends.com\nPassword: Test@1234\n\nUsername: joey_tribianni@friends.com\nPassword: Test@1234\n\nUsername: phoebe_buffay@friends.com\nPassword: Test@1234\n\nUsername: rachel_green@friends.com\nPassword: Test@1234\n\n"
    window.alert(alert_msg)
  }

  return(
    <Card className="Auth__card">

      <FormControl className='Auth__formcontrol'>
			  <InputLabel
			  	className='Auth__label'
			  	htmlFor="email">
			  		Enter your email here
			  </InputLabel>
			  <Input
			    id="email"
          className="Auth__input"
			    aria-describedby="input-for-email"
			    onChange={onInputChange}
			  />
      </FormControl>

      <FormControl className="Auth__formcontrol">
        <InputLabel
			  	className='Auth__label'
			  	htmlFor="name">
			  		Enter your nickname here
			  </InputLabel>
			  <Input
			    id="name"
          className="Auth__input"
          type="text"
			    aria-describedby="input-for-name"
			    onChange={onInputChange}
			  />
		  </FormControl>

      <FormControl className="Auth__formcontrol">
          <InputLabel
  			  	className='Auth__label'
  			  	htmlFor="password">
  			  		Enter a secure password
  			  </InputLabel>
  			  <Input
  			    id="password"
            className="Auth__input"
            type="password"
  			    aria-describedby="input-for-password"
  			    onChange={onInputChange}
  			  />
  		  </FormControl>

		  <Button
		  	className='Auth__button'
		  	variant='outlined'
		  	color='primary'
		    type='submit'
		  	onClick={onFormSubmit}>
		  	    Sign Up
		  </Button>

    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (name, userName, password) => dispatch(signUpUser(name, userName, password))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)
