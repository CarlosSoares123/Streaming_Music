import styled from "styled-components";

export const Footer = styled.footer`
  grid-area: player;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-focus);
  
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SongInfo = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  
  gap: 16px;
`
export const ArtistImg = styled.img`
  width: 74.667px;
  height: 74.667px;
  border-radius: 50%;
  object-fit: cover;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

`
export const TitleSong = styled.span`
  font-weight: 500;
  color: var(--color-base);
`
export const Auth = styled.span``

export const Player = styled.div`
  width: 600px;
  height: 74.667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px; 
`
export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 30px;
`
export const ButtonControls = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.3s, box-shadow 0.3s; 

  &:hover {
    color: var(--color-focus);
  }
`
export const TimeLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
` 
export const ProgressBar = styled.span`
  width: 100%;
  height: 5px;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
`
export const LineProgress = styled.div`
  height: 100%;
  background-color: var(--color-focus);
  position: absolute;
  border-radius: 20px;
  transition: width 0.1s;
`

export const Time = styled.span`
font-size: 14px;
`
export const Config = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px; 

  .progress{
    background: #8C8C8C;
  }

`
