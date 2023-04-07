import React, { useState, useEffect } from 'react';

const SpeechRecognitionComponent = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let recognition = new window.webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      setTranscript(finalTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const handleStartListening = () => {
    setIsListening(true);
    window.webkitSpeechRecognition.start();
  };

  const handleStopListening = () => {
    setIsListening(false);
    window.webkitSpeechRecognition.stop();
  };

  return (
    <div>
      <button onClick={handleStartListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={handleStopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
