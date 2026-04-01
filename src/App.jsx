import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="w-full">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id='footer'>
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default App
