import React from 'react'
import { connect } from 'react-redux'

import ChatList from "./ChatPage/ChatList"
import ChatContainer from "./ChatPage/ChatContainer"
import { fetchContacts } from "../../redux/actions/chatActions"

function ChatPage(props) {

  // dispatch action to fetch contacts from database and store it in the state
  props.fetchContacts()

  return (
    <div className='App__div'>
      <ChatList />
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
