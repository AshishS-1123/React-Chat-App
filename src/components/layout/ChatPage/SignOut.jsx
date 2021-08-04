import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'

import { signOutUser } from "../../../redux/actions/authActions"
import "./SignOut.css"

function SignOut(props) {
  return (
    <Button
      variant='outlined'
      className='SignOut__button'
      onClick={props.signOutUser}
    >
      Sign Out
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser())
  }
}

export default connect(null, mapDispatchToProps)(SignOut)
