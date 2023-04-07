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
    <div>UserDashBoard</div>
  )
}

export default UserDashBoard