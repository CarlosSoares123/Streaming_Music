// MusicContext.tsx
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface Music {
  id: number;
  title: string;
  artist: string;
  imagePath: string;
  audioPath: string;
}

interface MusicContextProps {
  currentSong: Music | null;
  setCurrentSong: (song: Music | null) => void;
  playMusicById: (id: number) => void;
  musicList: Music[];
  setMusicList: (musicList: Music[]) => void;  
  audioData: ArrayBuffer | null; 
  setAudioData: (data: ArrayBuffer | null) => void;
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const MusicProvider: React.FC<Props> = ({ children }) => {
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [audioData, setAudioData] = useState<ArrayBuffer | null>(null);

   // Recuperar o estado atual da música do Local Storage ao criar o contexto
  const [currentSong, setCurrentSong] = useState<Music | null>(null)


  // Atualizar o Local Storage sempre que o estado da música mudar
  useEffect(() => {
    localStorage.setItem('currentSong', JSON.stringify(currentSong));
  }, [currentSong]);


  const playMusicById = async (id: number) => {
    try {
      const musicToPlay = musicList.find((music) => music.id === id);
      if (musicToPlay) {
        setCurrentSong(musicToPlay);
      }
    } catch (error) {
      console.error('Erro ao reproduzir música:', error);
    }
  };

  const value: MusicContextProps = {
    currentSong,
    setCurrentSong,
    playMusicById,
    musicList,
    audioData,
    setAudioData,
    setMusicList
  };

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
