import styled from "styled-components";

export const AlbunsContainer = styled.div`  
  display: grid;
  grid-gap: 20px;
  padding: 10px 25px;
`

export const Intro = styled.div`
  width: 100%;  
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding-bottom: 30px;
  border-bottom: 1px solid #999;
`
export const Title = styled.h2`
  font-size: 25px;  
  font-weight: 700;
`
export const MusicAdmin = styled.figure`
  width: 100%;
  height: 200px;
  background-color: #444;
`


export const MusicUpload = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`
export const Musics = styled.div`
  
`
export const MusicCard = styled.div`
  height: 310px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  .cover{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

  &:hover .cover{
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
  }
`
export const ButtonPlay = styled.button`
  width: 100px;
  height: 100px;
  clip-path: circle();
  font-size: 70px;
  cursor: pointer;
`


export const Figure = styled.figure`
  width: 252px;
  height: 252px;
  margin-bottom: 10px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`
export const Info = styled.div`  
  display: grid;
  gap: 8px;
  margin-bottom: 5px;
`
export const TitleSong = styled.span`
  font-weight: 700;
  color: var(--color-base);
`
export const AuthSong = styled.span`
  color: var(--color-text);
  font-weight: 700;
`
