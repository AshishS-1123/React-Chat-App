import React from "react"
import { Button, Card } from "@material-ui/core"
import { Link } from "react-router-dom"

import LeftPane from "./HomePage/LeftPane"
import RightPane from "./HomePage/RightPane"

import "./Home.css"

function Home() {

  return(
    <Card className="Home__card">
      <LeftPane></LeftPane>
      <RightPane component="signin"></RightPane>
    </Card>
  );
}

export default Home
