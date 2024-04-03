import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/800.css"; // Defaults to weight 400




function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
