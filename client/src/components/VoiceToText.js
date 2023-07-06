import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './VoiceToText.css';

function VoiceToText() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div clasName="main-container">
    <div className="voice-to-text-container">
      <h2>Voice to Text</h2>
      <div className="transcript-area">
        <p className="transcript">{transcript}</p>
      </div>
      <div className="button-group">
        <button className="action-button start-button" onClick={handleStartListening}>Start</button>
        <button className="action-button stop-button" onClick={handleStopListening}>Stop</button>
        <button className="action-button reset-button" onClick={resetTranscript}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default VoiceToText;
