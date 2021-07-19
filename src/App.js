import { useState } from "react";

import "./App.css";

import InputForm from "./components/InputForm";
import MessageList from "./components/MessageList";

function App() {
  // state to store all sent and recieved messages
  const [messages, setMessages] = useState([]);
  return (
    <div className="App">
      <MessageList className='message-container' messages={messages}></MessageList>
      <InputForm className='form' messages = {messages} setMessages = {setMessages}/>
    </div>
  );
}

export default App;

// <MessageList className='message-container' messages={messages}></MessageList>
