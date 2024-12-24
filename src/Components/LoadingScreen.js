import React, { useEffect, useRef } from 'react';
import '../Assets/style/LoadingScreen.css'; // Ensure proper styling
import audiosound from '../Assets/images/sound.mp3';

function LoadingScreen() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audiosound);
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="typing">wohoosh el wake3 w el mawake3</h1>
        <audio ref={audioRef} src={require('../Assets/images/sound.mp3')} />
      </div>
    </div>
  );
}

export default LoadingScreen;
