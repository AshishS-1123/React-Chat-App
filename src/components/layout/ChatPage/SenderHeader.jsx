import React, { useEffect } from "react"
import { useSelector } from 'react-redux'

import "./SenderHeader.css"

function SenderHeader() {

  const onButtonClick = () => {
    console.log("Clicked");
    const icon_items = document.querySelectorAll('.SenderHeader__hamburger > span')

    icon_items.forEach((item, idx) => {
      const class_name = `icon_${idx + 1}`
      item.classList.toggle(class_name)
    })

  }

  const onWindowResize = () => {
    if(window.innerWidth >= 1175) {
      document.querySelectorAll('.SenderHeader__hamburger > span').forEach((item, idx) => {
        item.classList.add(`icon_${idx+1}`)
      })
    } else {
      document.querySelectorAll('.SenderHeader__hamburger > span').forEach((item, idx) => {
        item.classList.remove(`icon_${idx+1}`)
      })
    }
  }

  useEffect( () => {
    const hamburger_button = document.querySelector('.SenderHeader__hamburger')
    if(window.innerWidth >= 1175) {
      document.querySelectorAll('.SenderHeader__hamburger > span').forEach((item, idx) => {
        item.classList.add(`icon_${idx+1}`)
      })
    }

    hamburger_button.addEventListener('click', onButtonClick)
    window.addEventListener('resize', onWindowResize)

    return () => {
      hamburger_button.removeEventListener('click', onButtonClick)
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  const user_info = useSelector(state => state.chat.active_chat_recipient)

  return (
    <div className='SenderHeader__container'>
      <button className='SenderHeader__hamburger'>
          <span className='SenderHeader__hamburger_icon '></span>
          <span className='SenderHeader__hamburger_icon '></span>
          <span className='SenderHeader__hamburger_icon '></span>
      </button>
      <div className='SenderHeader__senderinfo'>
        <h1 className='SenderHeader__sendername'>{user_info.contact_name}</h1>
        <p className='SenderHeader__senderemail'>{user_info.contact_email}</p>
      </div>
      <div className='SenderHeader__pic'></div>
    </div>
  )
}

export default SenderHeader
