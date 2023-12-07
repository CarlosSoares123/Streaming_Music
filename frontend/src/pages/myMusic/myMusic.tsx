import * as M from './myMusic'
import { Layout } from '../../layout/Layout.tsx'
import { useEffect, useState } from 'react';
import { useMusic } from '../../context/MusicContext.tsx'
import axios from 'axios';

import { BsPlay, BsTrash } from 'react-icons/bs';

interface Music {
  id: number;
  title: string;
  artist: string;
  imagePath: string;
  audioPath: string;
  dataAdicionada: string;
  duracao: number;
}

export const MyMusics = () => {
  const {  playMusicById } = useMusic()
  const [musicList, setMusicList] = useState<Music[]>([]);

  useEffect(() => {
    const fetchMyMusicList = async () => {
      try {
        const response = await axios.get('http://localhost:4000/upload/mylist');
        const data: Music[] = response.data;

        const musicListWithDuration = await Promise.all(
          data.map(async (music) => {
            try {
              const duration = await getAudioDuration(music.audioPath);
              return { ...music, duracao: duration, dataAdicionada: music.createdAt };
            } catch (error) {
              console.error(`Erro ao obter a duração da música ${music.id}:`, error);
              return { ...music, duracao: 0, dataAdicionada: music.createdAt };
            }
          })
        );

        setMusicList(musicListWithDuration);
      } catch (error) {
        console.error('Erro ao obter a lista de músicas enviadas pelo usuário:', error);
      }
    };

    fetchMyMusicList();
  }, [musicList]);

  const getAudioDuration = async (audioPath: string) => {
    return new Promise<number>((resolve, reject) => {
      if (!audioPath) {
        reject(new Error('Caminho do arquivo de áudio não especificado'));
        return;
      }

      const audio = new Audio(`http://localhost:4000/uploads/musics/${audioPath}`);

      audio.addEventListener('loadedmetadata', () => {
        const durationInSeconds = audio.duration;
        resolve(durationInSeconds);
      });

      audio.addEventListener('error', (error) => {
        reject(new Error(`Erro ao carregar o arquivo de áudio: ${error}`));
      });
    });
  };

  const formatDataAdicionada = (dataAdicionada: string) => {
    const data = new Date(dataAdicionada);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const formatDuracao = (duracao: number) => {
    const minutos = Math.floor(duracao / 60);
    const segundos = Math.floor(duracao % 60);
    return `${minutos}:${segundos.toString().padStart(2, '0')}`;
  };

  const DeleteMusic = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/upload/${id}/delete`)

    } catch (error) {
      console.error('Erro ao deletar a musica:', error)
    }
  }

  return(
    <Layout>
      <M.Container>
        {/* <M.Figure></M.Figure> */}
        
      <M.TabelaContainer>
      <M.Tabela>
        <M.Cabecalho>
          <M.LinhaCabecalho>
            <M.CelulaCabecalho>Título</M.CelulaCabecalho>
            <M.CelulaCabecalho>Data Adicionada</M.CelulaCabecalho>
            <M.CelulaCabecalho>Duração</M.CelulaCabecalho>
            <M.CelulaCabecalho></M.CelulaCabecalho>
          </M.LinhaCabecalho>
        </M.Cabecalho>

        <M.CorpoTabela>
          {musicList.map((music) => (
            <M.Linha key={music.id}>
              <M.Celula2>
                <img src={`http://localhost:4000/uploads/images/${music.imagePath}`} alt="" />
                <div className="text">
                  <span>{music.title}</span>
                  <span>{music.artist}</span>
                </div>
              </M.Celula2>
              <M.Celula>{formatDataAdicionada(music.dataAdicionada)}</M.Celula>
              <M.Celula>{formatDuracao(music.duracao)} minutos</M.Celula>
              <M.Celula>
                
                <BsTrash onClick={()=> DeleteMusic(music.id)}/>
              </M.Celula>
            </M.Linha>
          ))}
        </M.CorpoTabela>
      </M.Tabela>
    </M.TabelaContainer>


      </M.Container>
    </Layout>
  )
}