import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Alumni, Employer, Parent, Student, Teacher } from './pages/index.ts'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/students', element: <Student /> },
  { path: '/teachers', element: <Teacher /> },
  { path: '/parents', element: <Parent /> },
  { path: '/alumni', element: <Alumni /> },
  { path: '/employers', element: <Employer />},
  { path: '/:path*', element: <div>Not Found</div> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
