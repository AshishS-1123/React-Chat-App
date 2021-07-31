import React from "react"

import HomeButtons from "./HomeButtons"
import SignIn from "../../auth/SignIn"
import SignUp from "../../auth/SignUp"

import "./RightPane.css"

function RightPane({ component }) {

  let heading = ""

  switch(component) {
    case "home_buttons":
      heading = "Getting Started"
      break
    case "signin":
      heading = "Sign In"
      break
    case "signup":
      heading = "Log In"
      break
  }

  const componentFromName = () => {
    if(component == "home_buttons") {
      return <HomeButtons></HomeButtons>
    } else if(component == "signin") {
      return <SignIn></SignIn>
    } else {
      return <SignUp></SignUp>
    }
  }

  return (
    <article className="RightPane__container">
      <h1 className="RightPane__heading">{heading}</h1>
      { componentFromName(component) }
    </article>
  );
}

export default RightPane
