import React from 'react'
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Services from "./components/services/services";
import Portofolio from "./components/portofolio/portofolio";
import Contact from "./components/contact/contact";


const App = () => {
  
  return (
    <>
    <div id='home'>
      <Navbar/>
      <Hero/>
    </div>
    <div id='about'>
      <About/>
    </div>
    <div id='services'>
      <Services/>
    </div>
    <div id='portofolio'>
      <Portofolio/>
    </div>
    <div id='contact'>
      <Contact/>
    </div>
    </>
  )
}

export default App
