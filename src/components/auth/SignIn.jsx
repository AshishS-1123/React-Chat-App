import React, { useState } from "react"
import { Card, FormControl, InputLabel, Input, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

function SignIn(props) {
  const [info, setInfo] = useState({email: "", password: ""})
  const {userInfo, setUserInfo} = props

  const onInputChange = (e) => {
    setInfo({...info, [e.target.id]: e.target.value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    setUserInfo({...userInfo, email: info.email, password: info.password})
  }

  return(
    <Card>
      <FormControl id='SignIn__formcontrol'>
			  <InputLabel
			  	id='SignIn__label'
			  	htmlFor="email">
			  		Email
			  </InputLabel>
			  <Input
			    id="email"
			    aria-describedby="input-for-email"
			    onChange={onInputChange}
			  />
      </FormControl>

      <FormControl>
        <InputLabel
			  	id='SignIn__label'
			  	htmlFor="password">
			  		Password
			  </InputLabel>
			  <Input
			    id="password"
          type="password"
			    aria-describedby="input-for-password"
			    onChange={onInputChange}
			  />
		  </FormControl>

		  <Button
		  	id='SignIn__button'
		  	variant='outlined'
		  	color='primary'
		    type='submit'
		  	onClick={onFormSubmit}>
		  	    <Link to="/chats">
              Sign In
            </Link>
  		  </Button>
    </Card>
  )
}

export default SignIn
