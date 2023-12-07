import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface TokenVerificationProps {
  children: React.ReactNode
}


export const TokenVerification: React.FC<TokenVerificationProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token){
      setIsAuthenticated(true)
    } else{ 
      setIsAuthenticated(false)
      navigate('/')
    }
  }, [navigate])

  return <>{isAuthenticated && children}</>
}