import React, { useState } from "react"
import { Card, FormControl, InputLabel, Input, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "firebase/auth"

import { signInUser } from "../../redux/actions/authActions.jsx"
import "./Auth.css"

function SignIn(props) {
  const [info, setInfo] = useState({email: "", password: ""})

  const onInputChange = (e) => {
    setInfo({...info, [e.target.id]: e.target.value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    props.signInUser(info.email, info.password)
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

      <FormControl className='Auth__formcontrol'>
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
              Sign In
            </Link>
  		  </Button>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (userName, password) => dispatch(signInUser(userName, password))
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
