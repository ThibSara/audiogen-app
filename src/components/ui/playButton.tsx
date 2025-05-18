"use client";
import { PlayIcon } from "../../../public/icon/PlayIcon";
import { PauseIcon } from "../../../public/icon/PauseIcon";
import { useRef, useEffect } from "react";
import { useAudioPlayer } from "../AudioPlayerProvider";

type PlayButtonProps = {
  audioUrl: string;
  id: string;
};

export const PlayButton: React.FC<PlayButtonProps> = ({ audioUrl, id }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setCurrentAudio, currentId, setCurrentId } = useAudioPlayer();
  const isPlaying = currentId === id;

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setCurrentId(null);
    } else {
      setCurrentAudio(audio);
      audio.play();
      setCurrentId(id);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentId(null);
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [setCurrentId]);

  return (
    <div className="flex flex-col items-center p-1">
      <audio ref={audioRef} src={audioUrl} preload="auto" />
      <button
        onClick={handlePlayPause}
        className="flex items-center gap-x-2 text-sm/6 font-bold text-pink-500 hover:text-pink-700 active:text-pink-900"
      >
        {isPlaying ? (
          <PauseIcon className="h-2.5 w-2.5 fill-current" />
        ) : (
          <PlayIcon className="h-2.5 w-2.5 fill-current" />
        )}
        <span>{isPlaying ? "Pause" : "Listen"}</span>
      </button>
    </div>
  );
};
