import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Title from './components/Title/Title'
import Gallery from './components/Gallery/Gallery'
import Programs from './components/Programs/Programs'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
      <About/>
      <Title subTitle="Our Gallery" title="Our Work In Pictures" />
      <Gallery />
      <Title subTitle="Our Programs" title="What We Do" />
      <Programs/>
      </div>
    </div>
  )
}

export default App

