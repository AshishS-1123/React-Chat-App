import React from "react"
import { Button, Card } from "@material-ui/core"
import { Link } from "react-router-dom"

import "./Home.css"

function Home() {

  return(
    <Card className="Home__card">
      <Link to='/signin'>
        <Button
            className="Home__button"
            variant='outlined'
            color='primary'>
              Sign In
        </Button>
      </Link>
      <Link to='/signup'>
        <Button
            className="Home__button"
            variant='outlined'
            color='primary'>
              Sign Up
        </Button>
      </Link>

    </Card>)
}

export default Home
