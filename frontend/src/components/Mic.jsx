import React, { useState } from "react";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// Other imports

const Mic = () => {
  const [listen, setListen] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startLis = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    console.log(transcript)
  };
  const stopLis = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <>
      {listen ? (
          
          <MicOffRoundedIcon
            onClick={() => {
              setListen(false);
              stopLis();
            }}
            />
        ) : (
          <MicRoundedIcon
            onClick={() => {
              setListen(true);
              startLis();
            }}
        />
      )}
    </>
  );
};

export default Mic;
