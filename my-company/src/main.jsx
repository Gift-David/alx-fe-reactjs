import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'

const router = createBrowserRouter([
  {path:"/", element:<App />,},
  {path: "/about", element: <About />,},
  {path: "/contact", element: <Contact />,},
  {path: "/services", element: <Services />,},
  // {path: '*', element: <App />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
