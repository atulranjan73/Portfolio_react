import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/service/Service'
import Mywork from './components/MyWork/Mywork'
import Contact from './components/contact/Contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>

    </div>
  )
}

export default App
