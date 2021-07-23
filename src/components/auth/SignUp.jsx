import React, { useState } from "react"
import { Card, FormControl, InputLabel, Input, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

function SignUp(props) {
  const [info, setInfo] = useState({email: "", password: "", name: ""})
  const {userInfo, setUserInfo} = props

  const onInputChange = (e) => {
    setInfo({...info, [e.target.id]: e.target.value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    setUserInfo(info)
  }

  return(
    <Card>

      <FormControl id='SignUp__formcontrol'>
			  <InputLabel
			  	id='SignUp__label'
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
			  	id='SignUp__label'
			  	htmlFor="name">
			  		Name
			  </InputLabel>
			  <Input
			    id="name"
          type="text"
			    aria-describedby="input-for-name"
			    onChange={onInputChange}
			  />
		  </FormControl>

      <FormControl>
          <InputLabel
  			  	id='SignUp__label'
  			  	htmlFor="password">
  			  		Password
  			  </InputLabel>
  			  <Input
  			    id="password"
            type="passwordp"
  			    aria-describedby="input-for-password"
  			    onChange={onInputChange}
  			  />
  		  </FormControl>

		  <Button
		  	id='SignUp__button'
		  	variant='outlined'
		  	color='primary'
		    type='submit'
		  	onClick={onFormSubmit}>
		  	    <Link to="/chats">
              Sign U
            </Link>
		  </Button>

    </Card>
  )
}

export default SignUp
