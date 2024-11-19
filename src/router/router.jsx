import { Route, createBrowserRouter, Link } from 'react-router-dom'
import App from '../App.jsx'
import Login from '../components/Login/Login.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },

])

export default router