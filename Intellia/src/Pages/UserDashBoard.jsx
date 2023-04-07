import React, { useState } from "react";
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import "./style.css";

function UserDashBoard() {
  const [transcript, setTranscript] = useState("");
  const [chatStripes, setChatStripes] = useState([]);

  const handleSpeechRecognition = () => {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1];
      const transcript = result[0].transcript;
      setTranscript(transcript);
    };
    recognition.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = transcript.trim();
    setTranscript("");

    if (data) {
      const stripes = [
        ...chatStripes,
        chatStripe(false, data),
        chatStripe(true, "", generateUniqueId()),
      ];
      setChatStripes(stripes);
    }
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);
    return `id-${timestamp}-${hexadecimalString}`;
  };

  const chatStripe = (isAi, value, uniqueId) => {
    return (
      <div className={`wrapper ${isAi && "ai"}`}>
        <div className="chat">
          <div className="profile">
            <img src={isAi ? bot : user} alt={isAi ? "bot" : "user"} />
          </div>
          <div className="message" id={uniqueId}>
            {value}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="app">
      <div id="private_header">hello</div>
      <div id="chat_container">{chatStripes}</div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="prompt"
          rows="1"
          cols="1"
          placeholder="Ask ishimwe..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
        <button type="submit">
          <img src="assets/send.svg" alt="send" />
        </button>
      </form>
      <button onClick={handleSpeechRecognition}>Start recognition</button>
    </div>
  );
}

export default UserDashBoard;
