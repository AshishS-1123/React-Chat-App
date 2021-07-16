import { useState } from "react";

import "./App.css";

import InputForm from "./components/inputForm";
import MessageList from "./components/messageList";

function App() {
  // state to store all sent and recieved messages
  const [messages, setMessages] = useState([]);
  return (
    <div className="App">
      <InputForm messages = {messages} setMessages = {setMessages}/>
      <MessageList messages = {messages} />
    </div>
  );
}

export default App;
