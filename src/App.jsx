import About from "./assets/About"
import Contact from "./assets/Contact"
import Education from "./assets/Education"
import Experience from "./assets/Experience"
import Footer from "./assets/Footer"
import Home from "./assets/Home"
import Navbar from "./assets/Navbar"
import Projects from "./assets/Projects"
import Skill from "./assets/Skill"
import SocialLinks from "./assets/SocialLinks"
import Snowfall from "react-snowfall"

function App() {

  return (
    <>
      <Snowfall color="cyan" />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
      <SocialLinks />
    </>
  )
}

export default App
