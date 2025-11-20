import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Markets from './components/Markets'
import Assortiment from './components/Assortiment'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <Hero />
      <About />
      <Markets />
      <Assortiment />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
