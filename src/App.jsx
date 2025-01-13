import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Code from './components/Code'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/About'
import SkillsSection from './components/Skills'
import Experience from './components/Experince'
import Services from './components/services'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/certificate'
import ContactSection from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-screen overflow-x-hidden'>
      <Navbar/>
    <Home/>
    <AboutMe/>
    <SkillsSection/>
    <Projects/>
    <Experience/>
    <Certifications/>
    <Services/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default App
