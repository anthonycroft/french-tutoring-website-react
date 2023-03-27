import { useState, useRef, useEffect } from 'react';
import audioFiles from "../data/audioFiles";
import "./SoundClip.css";

function SoundClip() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const randomFileRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Set a new random file to play
      const randomIndex = Math.floor(Math.random() * audioFiles.length);
      const randomFile = audioFiles[randomIndex];
      randomFileRef.current = randomFile;
      
      // Set the audio source to the new file
      audioRef.current.src = `${randomFile.path}`;
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomFile = audioFiles[randomIndex];
    randomFileRef.current = randomFile;

    audioRef.current.src = `${randomFile.path}`;
    const audio = audioRef.current;
    
    audioRef.current.play(); // play the audio on page load
    setIsPlaying(true);

    // set the initial volume to 1
    if (audioRef.current.volume != null) {
      audioRef.current.volume = 1;
    }

    // start the fade-out effect after 9 seconds (1000 milliseconds = 1 second)
    setTimeout(() => {
      let fadeOutInterval = setInterval(() => {
        if (audioRef.current != null) {
          // decrease the volume by 0.1 every 100 milliseconds
          if (audioRef.current.volume > 0) {
            audioRef.current.volume = Math.max(audioRef.current.volume - 0.1, 0);
          }
          if (audioRef.current.volume <= 0) {
            // stop the interval and pause the audio when the volume reaches 0
            clearInterval(fadeOutInterval);
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
      }, 100);
    }, 9000); // 9 seconds in milliseconds

    return () => {
      // reset the volume to 1 when the component unmounts
      if (audio != null) {
        audio.volume = 1;
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="" />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default SoundClip;
