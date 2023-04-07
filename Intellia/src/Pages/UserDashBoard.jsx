import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const UserDashboard = () => {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript) {
      setTranscript(finalTranscript);
      resetTranscript();
    }
  }, [finalTranscript, resetTranscript]);

  const toggleListening = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
    setListening(!listening);
  };

  return (
    <div>
      <button onClick={toggleListening}>
        {listening ? 'Stop listening' : 'Start listening'}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default UserDashboard;
