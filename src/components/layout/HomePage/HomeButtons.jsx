import React from "react"

import { Button } from "@material-ui/core"

import "./HomeButton.css"

function HomeButtons({setPaneComponent}) {

  return (
    <div className="HomeButtons__container">
      <Button
        className="HomeButtons__button"
        onClick={() => {setPaneComponent("signup")}}>
          Log in to your account
      </Button>
      <Button
        className="HomeButtons__button"
        onClick={() => {setPaneComponent("signin")}}>
          Create a new account
      </Button>
    </div>
  );
}

export default HomeButtons
