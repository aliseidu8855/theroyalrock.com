import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Title from './components/Title/Title'
import Gallary from './components/Gallary/Gallary'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
      <About/>
      <Title subTitle="Our Gallary" title="Our Work In Pictures" />
      <Gallary />
      </div>
    </div>
  )
}

export default App

