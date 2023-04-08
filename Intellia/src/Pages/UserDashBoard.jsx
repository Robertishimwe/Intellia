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

// transcript,
//     interimTranscript,
//     finalTranscript,
//     resetTranscript,
//     listening,
//     browserSupportsSpeechRecognition,
//     isMicrophoneAvailable

import React, {useState, useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import UseTextToSpeech from '../utils/TextToSpeech';

import api from '../utils/api';

const UserDashBoard = () => {

  const { isSpeaking, onEnd, Speak } = UseTextToSpeech();

  const {
    transcript,
    listening,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

const [botResponse, setBotResponse] = useState('')
const [trigger, setTrigger] = useState(false)


useEffect(() => {
  console.log(listening)
 
if(finalTranscript =="" || finalTranscript == null || finalTranscript == undefined){
  console.log("==>",listening)
  SpeechRecognition.startListening()
}

}, [listening])


useEffect(() => {

  if(finalTranscript){
    //axios
    console.log(finalTranscript)
    api.post(`/chat/test`,{"prompt":finalTranscript})
        .then((res) => {
          console.log(res.data)
          Speak(res.data.bot);
          // resetTranscript()
         
        }).then(()=>{
          SpeechRecognition.startListening()
        }).catch((error)=>{
          console.log(error)
        })
  }else{
    return SpeechRecognition.startListening
  }

  // return () => {
  //   second
  // }
}, [finalTranscript])



  return (
    <div>
      {isSpeaking? "Speaking...":<p>Microphone: {listening ? 'on' : 'off'}</p>}
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>final {finalTranscript}</p>
    </div>
  );
};
export default UserDashBoard;
