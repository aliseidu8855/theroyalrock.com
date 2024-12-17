import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Gallary from './components/Gallary/Gallary'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
      <Gallary />
      </div>
    </div>
  )
}

export default App

