import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Menu from './component/Menu/Menu'
import About from './component/About/About'
import Error from './component/Error/Error'



const routers = createBrowserRouter([
  { 
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <Error /> },
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
