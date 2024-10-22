import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services/Services'
import My_Work from './components/My_Work/My_Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <My_Work></My_Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App;
