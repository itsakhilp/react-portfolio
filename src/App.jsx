
import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Bg from "./components/bg/Bg"

const App = () => {
  return (<>
    <div className={styles.App}>

       <Bg/> 
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
    </>

  )
}

export default App