// import React, {useState, useEffect} from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import api from '../utils/api';

// const UserDashBoard = () => {
//   const {
//     transcript,
//     listening,
//     finalTranscript,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

// const [botResponse, setBotResponse] = useState('')
// const [trigger, setTrigger] = useState(false)


// useEffect(() => {
//   console.log(listening)
 
// if(finalTranscript =="" || finalTranscript == null || finalTranscript == undefined){
//   console.log("==>",listening)
//   SpeechRecognition.startListening()
// }

// }, [listening])


// useEffect(() => {

//   if(finalTranscript){
//     //axios
//     console.log(finalTranscript)
//     api.post(`/chat/test`,{"prompt":finalTranscript})
//         .then((res) => {
//           console.log(res.data.bot)
//           resetTranscript()
         
//         }).then(()=>{
//           SpeechRecognition.startListening()
//         }).catch((error)=>{
//           console.log(error)
//         })
//   }else{
//     return SpeechRecognition.startListening
//   }

//   // return () => {
//   //   second
//   // }
// }, [finalTranscript])



//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//       <p>final {finalTranscript}</p>
//     </div>
//   );
// };
// export default UserDashBoard;



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
    }
  }, [listening]);

  useEffect(() => {
    if (finalTranscript) {
      api
        .post(`/chat/test`, { prompt: finalTranscript })
        .then((res) => {
          console.log(res.data.bot);
          setBotResponse(res.data.bot);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      SpeechRecognition.startListening();
    }
  }, [finalTranscript]);

  useEffect(() => {
    if (botResponse) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(botResponse);
      utterance.onstart = () => {
        SpeechRecognition.stopListening
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
  //   if (botResponse) {
  //     const synth = window.speechSynthesis;
  //     const utterance = new SpeechSynthesisUtterance(botResponse);
  //     synth.speak(utterance);
  //   }
  // }, [botResponse]);

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
