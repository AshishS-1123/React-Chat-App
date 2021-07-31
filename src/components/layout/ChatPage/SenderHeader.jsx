import React from "react"

import "./SenderHeader.css"

function SenderHeader() {

  return (
    <div className='SenderHeader__container'>
      <div className='SenderHeader__hamburger'>
        <div className='SenderHeader__hamburgerbar'></div>
        <div className='SenderHeader__hamburgerbar'></div>
        <div className='SenderHeader__hamburgerbar'></div>
      </div>
      <div className='SenderHeader__senderinfo'>
        <h1 className='SenderHeader__sendername'>Monica Geller</h1>
        <p className='SenderHeader__senderemail'>mon@friends.com</p>
      </div>
      <div className='SenderHeader__pic'></div>
    </div>
  )
}

export default SenderHeader
