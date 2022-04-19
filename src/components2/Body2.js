import React from 'react'
import Header from '../components2/Header'
import About from './About'
import Contact from './Contact'
import OurTeam from './OurTeam'
import Slider from './Slider'

function Body2() {
  return (
    <div className='text-gray-500'>
        <Header/>
        <Slider/>
        <About/>
        <OurTeam/>
        <Contact/>
    </div>
  )
}

export default Body2