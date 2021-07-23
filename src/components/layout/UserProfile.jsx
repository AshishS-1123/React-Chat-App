import { Card } from "@material-ui/core"

import "./UserProfile.css"

function UserProfile(props) {
  const initials = "AS"
  const name = props.name

  return (
    <Card className="UserProfile__card">
      <div className="UserProfile__pic">{initials}</div>
      <p className="UserProfile__name">{name}</p>
    </Card>
  )
}

export default UserProfile
