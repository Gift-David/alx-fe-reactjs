import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
