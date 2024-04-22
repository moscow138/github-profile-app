import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import Viewrepo from './pages/Viewrepo'
import Error from './pages/Error.jsx'
import ErroBound from './pages/ErroBound.jsx'
import { ErrorBoundary } from 'react-error-boundary'


const router = createBrowserRouter([
  {
    path:"/",
    
    element: <ErrorBoundary fallback={<div className='error'>There was an error</div>}><App /></ErrorBoundary> 

  },
  {
    path:"repo/:repoId",
    element: <Viewrepo />

  },
  {
    path:"*",
    element: <Error />

  },
  {
    path:"https://github-repo-4pfu3oj1v-johns-projects-31a3c5c2.vercel.app/error",
    element: <ErroBound />

  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router= {router} />

)
