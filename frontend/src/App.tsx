import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import { Login } from './pages/auth/Login.tsx'
import { Register } from "./pages/auth/Register.tsx"
import { Verify } from "./pages/auth/Verify.tsx"
import { Home } from './pages/home/Home.tsx'
import { Upload } from './pages/upload/Upload.tsx'
import { MyMusics } from './pages/myMusic/myMusic.tsx'
import { StyleGlobal } from "./styleGlobal.ts"
import { TokenVerification } from './TokenVerification.tsx'
import axios from 'axios'
import { MusicProvider } from "./context/MusicContext.tsx"

const storedToken = localStorage.getItem('token');
if (storedToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
}

function App() {
  return (
    <MusicProvider>
      <StyleGlobal/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={ <Register/>}/>
          <Route 
            path="/verify" 
            element={ <TokenVerification><Verify/></TokenVerification>}/>
          <Route 
            path='/home' 
            element={ <TokenVerification><Home/></TokenVerification>}/>
          <Route 
            path="/upload" 
            element={ <TokenVerification><Upload/></TokenVerification>}/>
          <Route 
            path="/myMusics" 
            element={ <TokenVerification><MyMusics/></TokenVerification>}/>
        </Routes>
      </Router>
    </MusicProvider>

  )
}

export default App
