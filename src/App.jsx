import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-container">
      <h1 className="styled-heading mt-32 font-bold">Hello World</h1> 
    </div>
    <img
      src="https://i.pinimg.com/originals/39/fe/7a/39fe7a06814d61557eea4aa7a495d588.gif"
      alt="My Animation"
      className="gif-image"
    />
  </>
  )
}

export default App


