import React, { useState, useEffect } from 'react';

const useSpeech = (text) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [onEnd, setOnEnd] = useState(() => {});

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    const handleEnd = () => {
      setIsSpeaking(false);
      onEnd();
    };
    
    synth.addEventListener('end', handleEnd);
    
    return () => {
      synth.cancel();
      synth.removeEventListener('end', handleEnd);
    };
  }, [text, onEnd]);
  
  const speak = () => {
    const synth = window.speechSynthesis;
    if (!synth.speaking) {
      setIsSpeaking(true);
      synth.speak(new SpeechSynthesisUtterance(text));
    }
  };
  
  return { isSpeaking, onEnd: setOnEnd, speak };
};

const TextToSpeech = ({ text }) => {
  const { isSpeaking, onEnd, speak } = useSpeech(text);
  
  return { isSpeaking, onEnd, speak };
};

export default TextToSpeech;
