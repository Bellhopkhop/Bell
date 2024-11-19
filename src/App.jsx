
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import LoginForm from './components/Login/Login'


function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
  </Routes>
  )

}

export default App


