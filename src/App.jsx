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
      <section id='Home'><HeroSection /></section>
      <section id='About'><About/></section>
      <section id='Contact'><ContactSection/></section>
      <section id='Projects'><ProjectSection/></section>
    </div>
  )
}

export default App
