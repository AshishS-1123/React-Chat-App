import React from "react"

import HomeButtons from "./HomeButtons"
import SignIn from "../../auth/SignIn"
import SignUp from "../../auth/SignUp"

import "./RightPane.css"

function RightPane({ paneComponent, setPaneComponent }) {

  let heading = ""

  switch(paneComponent) {
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
    if(paneComponent == "home_buttons") {
      return <HomeButtons setPaneComponent={setPaneComponent}></HomeButtons>
    } else if(paneComponent == "signin") {
      return <SignIn></SignIn>
    } else {
      return <SignUp></SignUp>
    }
  }

  return (
    <article className="RightPane__container">
      <h1 className="RightPane__heading">{heading}</h1>
      { componentFromName() }
    </article>
  );
}

export default RightPane
