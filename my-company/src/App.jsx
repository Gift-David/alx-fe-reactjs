import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/", element:<App />,},
  {path: "/about", element: <About />,},
  {path: "/contact", element: <Contact />,},
  {path: "/services", element: <Services />,},
  // {path: '*', element: <App />}
]);

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App


// "Route", "path", "Routes", "element"
