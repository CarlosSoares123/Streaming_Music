import * as A from './auth.ts'
import { FigureBg } from './components/figureBg.tsx'
import { Form } from './components/form/form.tsx'
import { Input } from '../components/inputs/input.ts'
import { Figure } from './components/figure/figure.tsx'
import Img from '/auth/auth.svg'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post<{token: string, message: string}>('http://localhost:4000/auth/login', {
        email,
        password
      })

    

    const token = response.data.token;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    navigate('/home', { replace: true });
    } catch (error) {
      console.error(error)
      alert(error.response.data)
    }
  }

  return (
    <A.Container>
      <A.Content>
        <Form
          title='Welcome'
          content='Explore. Find it out. Log in. Log in for your exclusive music experience.'
          submit='Log in'
          paragraph='Do you already have an account?'
          link='Register'
          url='/register'
          onSubmit={handleLogin}
        >
          <Input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Form>
        <Figure img={Img} />
      </A.Content>
      <FigureBg/>
    </A.Container>
  )
}
