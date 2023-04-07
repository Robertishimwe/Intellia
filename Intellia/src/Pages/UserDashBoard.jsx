import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function UserDashBoard() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (

    <>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <p>{transcript}</p>
    
    </>
  )
}

export default UserDashBoard