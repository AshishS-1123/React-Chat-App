import { useState } from "react";
import ChatList from "./components/ChatList"
import ChatContainer from "./components/ChatContainer"
import ChatInfo from "./components/ChatInfo"

import "./App.css";

function App() {
  return (
    <div className='App__div'>
      <ChatList></ChatList>
      <ChatContainer></ChatContainer>
      <ChatInfo></ChatInfo>
    </div>
  )
}

export default App;

// <MessageList className='message-container' messages={messages}></MessageList>
