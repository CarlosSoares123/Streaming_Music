import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as A from './auth.ts'

import { FigureBg } from './components/figureBg.tsx'
import { Form } from './components/form/form.tsx'

import  Img  from '/auth/register.svg'
import { Input } from '../components/inputs/input.ts'
import { Figure } from './components/figure/figure.tsx'

export const Register = () => {
  const [ email, setEmail ] = useState<string>()
  const [ password, setPassword ] = useState<string>('')
  const [ confirmPassword, setConfirmPassword ] = useState<string>('')
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post<{token:string}>('http://localhost:4000/auth/register', {email, password, confirmPassword})
      
      console.log(response.data)

    const token = response.data.token;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    navigate('/home', { replace: true });
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <A.Container>
      <A.Content>
        <Form
          title='Register'
          content='Sign up for a personalized music experience. Its quick and easy!'
          submit='Register'
          paragraph='Do you already have an account?'
          link='Login'
          url='/'
          onSubmit={handleRegister}
        >
        <Input 
          type='email' 
          name='email'
          placeholder='Email'
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input 
          type='password' 
          name='password' 
          placeholder='Password'
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Input 
          type='password' 
          name='password' 
          placeholder='Confirm Password'
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        />
        </Form>
        <Figure img={Img}/>
      </A.Content>
      <FigureBg/>
    </A.Container>
  )
}