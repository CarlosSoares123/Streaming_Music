import * as A from './albuns.ts'
import { BsPlayCircleFill } from "react-icons/bs";
import { useMusic } from '../../../../context/MusicContext.tsx'
import {useEffect} from 'react'
import axios from 'axios'


export const Albuns = () => {
  const { musicList, setMusicList, playMusicById } = useMusic()
  

  useEffect(() => {
    const fetchMusicList = async () => {
      try {
        const response = await axios.get('http://localhost:4000/upload/list');
        const data = response.data;
        setMusicList(data);
      } catch (error) {
        console.error('Erro ao obter a lista de músicas:', error);
      }
    };

    fetchMusicList();
  }, []);


  return(
    <A.AlbunsContainer>
      <A.Intro>
        <A.Title>Seja Bem vindo a minha plataforma</A.Title>

        <A.MusicAdmin>
          <img src="" alt="" />
        </A.MusicAdmin>

      </A.Intro>
      <A.MusicUpload>
        {
          musicList.map((music, index) => (
            <A.Musics key={index}>
              <A.MusicCard>
                <A.Figure>
                  <img src={`http://localhost:4000/uploads/images/${music.imagePath}`} alt="" />
                </A.Figure>
                <A.Info>
                <A.TitleSong>{music.title}</A.TitleSong>
                <A.AuthSong>{music.artist}</A.AuthSong>
                </A.Info>
                <div className="cover">
                  <A.ButtonPlay  onClick={() => playMusicById(music.id)}>
                    <BsPlayCircleFill style={{color: 'var(--color-focus)'}}/>
                  </A.ButtonPlay>
                </div>
              </A.MusicCard>
            </A.Musics>
          ))
        }
      </A.MusicUpload>
    </A.AlbunsContainer>
  )
}