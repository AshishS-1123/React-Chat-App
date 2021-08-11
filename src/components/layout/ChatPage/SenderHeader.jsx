import React from "react"
import { useSelector } from 'react-redux'

import "./SenderHeader.css"

function SenderHeader() {

  const user_info = useSelector(state => state.chat.active_chat_recipient)

  return (
    <div className='SenderHeader__container'>
      <div className='SenderHeader__hamburger'>
        <div className='SenderHeader__hamburgerbar'></div>
        <div className='SenderHeader__hamburgerbar'></div>
        <div className='SenderHeader__hamburgerbar'></div>
      </div>
      <div className='SenderHeader__senderinfo'>
        <h1 className='SenderHeader__sendername'>{user_info.contact_name}</h1>
        <p className='SenderHeader__senderemail'>{user_info.contact_email}</p>
      </div>
      <div className='SenderHeader__pic'></div>
    </div>
  )
}

export default SenderHeader
