import * as P from './playAudio'
import {useRef} from 'react'
import { BsPlay, BsPause, BsSkipForward, BsSkipBackward } from 'react-icons/bs';

export const Player = ({audioElem, isplaying, setIsplaying, songs, setSongs,currentSong, setCurrentSong}) => {
  const clickRef = useRef()

  const PlayPause = () => {
    setIsplaying(!isplaying)
  }

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const divprogress = offset / width * 100
    audioElem.current.currentTime = divprogress / 100 * currentSong.length
  }

  const skipBack = () =>{
    setIsplaying(!isplaying)
    const index = songs.findIndex(x => x.title == currentSong.title)
    if(index == 0){
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[index - 1])
    }

    audioElem.current.currentTime = 0
  }

  const skipNext = () =>{
    setIsplaying(!isplaying)
    const index = songs.findIndex(x => x.title == currentSong.title)
    if(index == songs.length - 1){
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[index + 1])
    }

    audioElem.current.currentTime = 0
  }

  return(
      <P.Player>
        <P.Controls>
          <P.ButtonControls onClick={skipBack}>
            <BsSkipBackward/>
          </P.ButtonControls>
          <P.ButtonControls onClick={PlayPause}>
            { isplaying ? <BsPause/> : <BsPlay/> }
          </P.ButtonControls>
          <P.ButtonControls onClick={skipNext}>
            <BsSkipForward/>
          </P.ButtonControls>
        </P.Controls>
        <P.TimeLine>
          <P.ProgressBar onClick={checkWidth} ref={clickRef}>
            <P.LineProgress progressLine={currentSong.progress} />
          </P.ProgressBar>
        </P.TimeLine>
        
      </P.Player>
  )
}