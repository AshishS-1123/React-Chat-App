import { useState } from "react";
import ChatList from "./components/ChatList"
import ChatContainer from "./components/ChatContainer"

import "./App.css";

function App() {
  return (
    <div className='App__div'>
      <ChatList></ChatList>
      <ChatContainer></ChatContainer>
    </div>
  )
}

export default App;
