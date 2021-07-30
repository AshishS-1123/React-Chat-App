import React from "react"

import HomeButtons from "./HomeButtons"
import SignIn from "../../auth/SignIn"
import SignUp from "../../auth/SignUp"

import "./RightPane.css"

function RightPane({heading, component}) {
  console.log(heading)

  const componentFromName = () => {
    if(component == "home_button") {
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
