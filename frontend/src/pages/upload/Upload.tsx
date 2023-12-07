import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import * as U from './upload.ts';
import { BsCloudUpload } from 'react-icons/bs';
import { Layout } from '../../layout/Layout.tsx';
import { Header } from '../../layout/components/header/header.ts';

export const Upload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const navigate = useNavigate()
  

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      setImage(file);
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleAudioChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setAudio(e.target.files[0]);
    }
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleArtistChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };
  const handleUploadClick = (id: string) => {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    inputElement.click();
  };
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUploading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('image', image as Blob);
    formData.append('audio', audio as Blob);

    try {
      await axios.post('http://localhost:4000/upload/addMusic', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Upload concluído com sucesso!');
      setTitle('')
      setArtist('')
      setAudio(null)
      setImage(null)

      navigate('/home')

    } catch (error) {
        console.error('Erro ao enviar a solicitação:', error);
      alert('Erro ao enviar a solicitação. Verifique o console para mais detalhes.');
    }
    finally {
      setIsUploading(false); // Define o estado de upload de volta para false, independentemente do resultado
    }
  };

  return (
    <Layout>
      <U.FormContainer>
        <Header />

        <U.Intro>
          <h2>Upload Music</h2>
          <p>
            Bring your musical masterpiece to life! Upload your song, add a captivating image, enter the title and highlight the talent behind it. Share your creation with the world and let your music shine, complete with your artistic signature.
          </p>
        </U.Intro>

        <U.Form onSubmit={handleUpload}>
          <U.Figure>
            {selectedImage ? (
              <U.Image src={selectedImage} alt="" />
            ) : (
              <U.Icon onClick={() => handleUploadClick('image-input')}>
                <BsCloudUpload style={{ fontSize: '100px' }} />
              </U.Icon>
            )}
          </U.Figure>

          <U.Inputs>
            <U.Box>
              <U.Label htmlFor="image" onClick={() => handleUploadClick('image-input')}>
                Select Image
              </U.Label>

              <U.InputImg
                type="file"
                id="image-input"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
              />
            </U.Box>

            <U.Input
              type="file"
              accept='audio/*'
              placeholder="Audio"
              name="audio"
              onChange={handleAudioChange}
            />

            <U.Input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleTitleChange}
            />
            <U.Input
              type="text"
              placeholder="Artist"
              name="artist"
              onChange={handleArtistChange}
            />

            <U.Submit type="submit" disabled={isUploading}>
              {isUploading ? 'Loading...' : 'Submit'}
            </U.Submit>
          </U.Inputs>
        </U.Form>
      </U.FormContainer>
    </Layout>
  );
};
