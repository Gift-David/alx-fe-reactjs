import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Main from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
    <Header />
    <Main />
    <UserProfile name="philip" age="32" bio="best selling author of sci-fi books" />
    <Footer />
      
    </>
  )
}

export default App
