import React, { useState } from "react"
import { Card, FormControl, InputLabel, Input, Button } from "@material-ui/core"

function SignIn() {
  const [info, setInfo] = useState({email: "", password: ""})

  const onInputChange = (e) => {
    setInfo({...info, [e.target.id]: e.target.value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(info)
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
		  	    Send
		  </Button>
    </Card>
  )
}

export default SignIn
