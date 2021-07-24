import React, { useState } from "react"
import { Card, FormControl, InputLabel, Input, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

import "./Auth.css"

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
    <Card className="Auth__card">

      <FormControl className='Auth__formcontrol'>
			  <InputLabel
			  	className='Auth__label'
			  	htmlFor="email">
			  		Email
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
			  		Name
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
  			  		Password
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
		  	    <Link to="/chats">
              Sign Up
            </Link>
		  </Button>

    </Card>
  )
}

export default SignUp
