// PlayAudio.tsx
import React, { useState, useRef, useEffect } from 'react';
import { BsPlay, BsPause, BsSkipForward, BsSkipBackward, BsVolumeUpFill } from 'react-icons/bs';
import { useMusic } from '../../../context/MusicContext';
import * as P from './playAudio';

export const PlayAudio: React.FC = () => {
  const { currentSong, musicList, setCurrentSong } = useMusic();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState({ progress: 0, length: 0 });
  const audioElem = useRef<HTMLAudioElement>(null);
  const clickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  }, [isPlaying]);

  const handleNewSongSelection = () => {
    setIsPlaying(false);
    setCurrentTime({ progress: 0, length: 0 });
    if (audioElem.current) {
      audioElem.current.currentTime = 0;
      audioElem.current.pause();
    }
  };

  useEffect(() => {
    if (currentSong === null) {
      setIsPlaying(false);
    } else {
      handleNewSongSelection();
      setIsPlaying(true);
      audioElem.current.play();
    }
  }, [currentSong]);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const onPlaying = () => {
    const duration = audioElem.current?.duration || 0;
    const ct = audioElem.current?.currentTime || 0;

    setCurrentTime({ ...currentTime, progress: (ct / duration) * 100, length: duration });
  };

  const skipBack = () => {
    setIsPlaying(!isPlaying);
    const index = musicList.findIndex((x) => x.title === currentSong?.title || '');
    if (index === 0) {
      setCurrentSong(musicList[musicList.length - 1]);
    } else {
      setCurrentSong(musicList[index - 1]);
    }
    if (audioElem.current) audioElem.current.currentTime = 0;
    setCurrentTime({ progress: 0, length: 0 });
  };

  const skipNext = () => {
    setIsPlaying(!isPlaying);
    const index = musicList.findIndex((x) => x.title === currentSong?.title || '');
    if (index === musicList.length - 1) {
      setCurrentSong(musicList[0]);
    } else {
      setCurrentSong(musicList[index + 1]);
    }

    if (audioElem.current) audioElem.current.currentTime = 0;
    setCurrentTime({ progress: 0, length: 0 });
  };

  const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (clickRef.current) {
      const width = clickRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const divProgress = (offset / width) * 100;
      audioElem.current.currentTime = (divProgress / 100) * currentTime.length;
    }
  };

  return (
    <P.Footer>
      <P.SongInfo>
        <P.ArtistImg src={`http://localhost:4000/uploads/images/${currentSong?.imagePath}`} alt="" />
        <P.Info>
          <P.TitleSong>{currentSong?.title || 'Title'}</P.TitleSong>
          <P.Auth>{currentSong?.artist || 'Artist'}</P.Auth>
        </P.Info>
      </P.SongInfo>

      <audio src={`http://localhost:4000/uploads/musics/${currentSong?.audioPath}`} ref={audioElem} onTimeUpdate={onPlaying} />
      <P.Player>
        <P.Controls>
          <P.ButtonControls onClick={skipBack}>
            <BsSkipBackward />
          </P.ButtonControls>
          <P.ButtonControls onClick={PlayPause}>
            {isPlaying ? <BsPause /> : <BsPlay />}
          </P.ButtonControls>
          <P.ButtonControls onClick={skipNext}>
            <BsSkipForward />
          </P.ButtonControls>
        </P.Controls>
        <P.TimeLine>
          <P.ProgressBar onClick={checkWidth} ref={clickRef}>
            <P.LineProgress style={{ width: `${currentTime.progress}%` }} />
          </P.ProgressBar>
        </P.TimeLine>
      </P.Player>

      <P.Config>
        <BsVolumeUpFill style={{ fontSize: '25px' }} />
        <P.ProgressBar>
          <P.LineProgress style={{ width: '20%' }} />
        </P.ProgressBar>
      </P.Config>
    </P.Footer>
  );
};
