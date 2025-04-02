import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Menu from './component/Menu/Menu'
import About from './component/About/About'
import Error from './component/Error/Error'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Payment from './component/Payment/Payment'



const routers = createBrowserRouter([
  { 
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login/> },
      { path: 'register', element: <Register/> },
      { path: '*', element: <Error /> },
      { path: 'payment', element: <Payment/> }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
