
import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {


  return (
    <div className='overflow-y-scroll no-scrollbar'>
      <Hero />
      <About />
      <Team />
      <Footer />
    </div>
  )
}

export default App
