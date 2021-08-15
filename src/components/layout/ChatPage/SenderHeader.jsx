import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'

import "./SenderHeader.css"

function SenderHeader() {
  const [toggleSidebar, setToggleSidebar] = useState(true)

  const onButtonClick = () => {
    setToggleSidebar(toggleSidebar => !toggleSidebar)
  }

  const onWindowResize = () => {
    if(window.innerWidth >= 1175) {
      setToggleSidebar(true)
    } else {
      setToggleSidebar(false)
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

  useEffect(() => {
    const icon_items = document.querySelectorAll('.SenderHeader__hamburger > span')
    const chatlist = document.querySelector('.ChatList__div')

    if(toggleSidebar) {
      icon_items.forEach((item, idx) => {
        const class_name = `icon_${idx + 1}`
        item.classList.add(class_name)
      })

      chatlist.style.transform = "scaleX(1)"
      chatlist.style.display = "block"
      if(window.innerWidth  < 1175) {
        document.querySelector('#InputForm__form').style.opacity = 0
        document.querySelector('.SenderHeader__hamburger').style.transform = "translate(280px, 4px) scale(0.8)"
      }

    } else {
      icon_items.forEach((item, idx) => {
        const class_name = `icon_${idx + 1}`
        item.classList.remove(class_name)
      })

      chatlist.style.transform = "scaleX(0)"
      chatlist.style.display = "none"
      document.querySelector('#InputForm__form').style.opacity = 1
      document.querySelector('.SenderHeader__hamburger').style.transform = "translate(0px, 0px)"
    }
  }, [toggleSidebar])

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
