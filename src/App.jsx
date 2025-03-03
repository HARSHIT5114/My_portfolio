import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/sections/HeroSection/HeroSection'
import About from './components/sections/About/About'
import ContactSection from './components/sections/ContactSection/ContactSection'
import ProjectSection from './components/sections/Projects/ProjectSection'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <ContactSection/>
      <ProjectSection/>
    </div>
  )
}

export default App
