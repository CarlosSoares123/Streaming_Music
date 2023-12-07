import * as H from './layout.ts'
import React, { ReactNode } from "react"

import { Menu } from './components/menu.tsx';
import { Header } from './components/header/header.tsx'
import { PlayAudio } from './components/playAudio/playAudio.tsx'

interface Props{
  children: ReactNode,
}


export const Layout: React.FC<Props> = ({children}) => {

  const handleLogout = () => {
    // Lógica de logout aqui
    console.log('Logout realizado com sucesso');
  };

  return (
    <H.LayoutContainer>
      <Menu/>
      <H.Content>
        <Header onLogout={handleLogout}/>
        {children}
      </H.Content>
      <PlayAudio/>
    </H.LayoutContainer>
  )
}