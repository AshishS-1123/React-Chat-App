import React from "react"

import { Button } from "@material-ui/core"

import "./HomeButton.css"

function HomeButtons() {

  return (
    <div className="HomeButtons__container">
      <Button className="HomeButtons__button">Log in to your account</Button>
      <Button className="HomeButtons__button">Create a new account</Button>
    </div>
  );
}

export default HomeButtons
