import React from 'react'
import { useSelector, connect } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

import ChatList from "./ChatPage/ChatList"
import ChatContainer from "./ChatPage/ChatContainer"
import { fetchContacts } from "../../redux/actions/chatActions"

function ChatPage(props) {

  props.fetchContacts()

  let user_contacts = []
  const user_id = useSelector((state) => state.firebase.auth.uid)

  // fetch all the user profile data and their contacts
  useFirestoreConnect([
    {collection: 'users', doc: user_id}
  ])

  // fetch the required data and wait for it to load
  const user_profile = useSelector((state) => state.firestore.ordered.users)

  if(isLoaded(user_profile)) {
    user_contacts = user_profile[0]['contacts']
  }

  return (
    <div className='App__div'>
      <ChatList
          contacts={user_contacts}>
      </ChatList>
      <ChatContainer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {dispatch(fetchContacts())}
  }
}

export default connect(null, mapDispatchToProps)(ChatPage)
