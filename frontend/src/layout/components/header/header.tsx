import React from 'react';
import { Link } from 'react-router-dom';
import * as H from './header.ts'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Adicione verificações adicionais, se necessário
      // ...
      // Remova o token e faça logout
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];

      // Chame a função de callback do logout
      onLogout();

      // Redirecione para a página de login
      navigate('/');
    } catch (error) {
      console.error('Erro durante o logout:', error);
    }
  };

  return (
    <H.Header>
      <div></div>
      <H.ButtonsEnter>
        <H.ButtonLink>
          <Link to='/upload'>Upload</Link>
        </H.ButtonLink>
        <H.LogoutButton onClick={handleLogout}>Logout</H.LogoutButton>
      </H.ButtonsEnter>
    </H.Header>
  );
};
