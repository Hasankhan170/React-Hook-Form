
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './screen/Login.jsx'
import Register from './screen/Register.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {path : '' , element : <Register/>},
      {path : '/Login', element : <Login/>},
      {path : '*' , element : <h3>Page Not Found...</h3>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
     <App />
  </RouterProvider>

   

)
