// import React from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// function UserDashBoard() {

//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (

//     <>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <p>{transcript}</p>
    
//     </>
//   )
// }

// export default UserDashBoard


// import React from 'react'
// // import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// function UserDashBoard() {
//   return (
//     <>
//     <div>UserDashBoard</div>
//     </>
    
//   )
// }

// export default UserDashBoard


import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const UserDashBoard = () => {
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
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default UserDashBoard;
