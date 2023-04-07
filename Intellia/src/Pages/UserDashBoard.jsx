import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function UserDashBoard() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  return (
    <div>UserDashBoard</div>
  )
}

export default UserDashBoard