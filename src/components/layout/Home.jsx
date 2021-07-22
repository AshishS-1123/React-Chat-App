import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

function Home() {

  return(
    <React.Fragment>
      <Link to='/signin'>
        <Button
            variant='outlined'
            color='primary'>
              Sign In
        </Button>
      </Link>
      <Link to='/signup'>
        <Button
            variant='outlined'
            color='primary'>
              Sign Up
        </Button>
      </Link>

    </React.Fragment>)
}

export default Home
