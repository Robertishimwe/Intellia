import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  useEffect(() => {
    if (isListening) {
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
      };
    } else {
      recognition.stop();
    }
  }, [isListening]);

  const handleButtonClick = () => {
    setIsListening(!isListening);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isListening ? "Stop" : "Start"} Listening
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default UserDashboard;
