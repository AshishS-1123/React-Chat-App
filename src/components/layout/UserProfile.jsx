import { Card } from "@material-ui/core"

import "./UserProfile.css"

function UserProfile(props) {
  console.log(props.info.split(" "))
  const initials = props.info.split(" ")[0][0] + props.info.split(" ")[1][0]
  const name = props.name

  return (
    <Card className="UserProfile__card">
      <div className="UserProfile__pic">{initials}</div>
      <p className="UserProfile__name">{name}</p>
    </Card>
  )
}

export default UserProfile
