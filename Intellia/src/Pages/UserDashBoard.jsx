import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import api from '../utils/api';

const UserDashBoard = () => {
  const {
    transcript,
    listening,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [botResponse, setBotResponse] = useState('');
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    if (finalTranscript === '' || finalTranscript == null || finalTranscript == undefined) {
      SpeechRecognition.startListening();
    } else {
      api.post(`/chat/test`, { prompt: finalTranscript })
        .then((res) => {
          console.log(res.data.bot);
          setBotResponse(res.data.bot);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [finalTranscript]);

  useEffect(() => {
    if (botResponse) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(botResponse);
      utterance.onstart = () => {
        SpeechRecognition.stopListening()
        console.log('Speech started');
        // Do something when speech starts
      };
      utterance.onend = () => {
        resetTranscript()
        SpeechRecognition.startListening()
        console.log('Speech ended');
        // Do something when speech ends
      };
      synth.speak(utterance);
    }
  }, [botResponse]);

  // useEffect(() => {
  //   if (finalTranscript !== '' && finalTranscript != null && finalTranscript != undefined) {
  //     api.post(`/chat/test`, { prompt: finalTranscript })
  //       .then((res) => {
  //         console.log(res.data.bot);
  //         setBotResponse(res.data.bot);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [finalTranscript]);

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>Final: {finalTranscript}</p>
      <p>Bot Response: {botResponse}</p>
    </div>
  );
};

export default UserDashBoard;
