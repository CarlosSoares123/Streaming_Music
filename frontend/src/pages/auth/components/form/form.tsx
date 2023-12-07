import React, { ReactNode } from "react"
import { Link } from 'react-router-dom'
import * as F from './form.ts'

interface Props {
  title: string,
  content: string,
  submit: string,
  paragraph: string,
  url: string,
  link: string,
   onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // Ajuste a assinatura aqui
  children: ReactNode,

}

export const Form:React.FC<Props> = ({title, content, submit, paragraph, url, link, children, onSubmit}) => {
  return(
    <F.Form onSubmit={onSubmit}>
          <F.Header>
            <h2>{title}</h2>
            <p>{content}</p>
          </F.Header>

          <F.Inputs>
            {children}
            <F.ButtonSubmit>{submit}</F.ButtonSubmit>
            <p>{paragraph} <Link to={url}>{link}</Link></p>
          </F.Inputs>
        </F.Form>
  )
}