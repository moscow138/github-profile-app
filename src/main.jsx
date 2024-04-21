import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import Viewrepo from './pages/Viewrepo'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />

  },
  {
    path:"repo/:repoId",
    element: <Viewrepo />

  },
  {
    path:"*",
    element: <Error />

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router= {router} />
)
