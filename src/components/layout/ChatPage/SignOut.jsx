import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'

import actionType from "../../../redux/constants/actionTypes"
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
    signOutUser: () => dispatch({type: actionType.SIGN_OUT})
  }
}

export default connect(null, mapDispatchToProps)(SignOut)
