import React, { useState } from "react"
import { Card } from "@material-ui/core"

import LeftPane from "./HomePage/LeftPane"
import RightPane from "./HomePage/RightPane"

import "./Home.css"

function Home() {

  const [paneComponent, setPaneComponent] = useState("home_buttons")

  return(
    <Card className="Home__card">
      <LeftPane></LeftPane>
      <RightPane paneComponent={paneComponent} setPaneComponent={setPaneComponent}></RightPane>
    </Card>
  );
}

export default Home
