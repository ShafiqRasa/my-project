import React from 'react'
import Content from './Content'
import Header from './Header'

function Body() {
  return (
    <div className="text-gray-600 font-sans grid md:grid-cols-5">
        <Header/>
        <Content/>
    </div>
  )
}

export default Body