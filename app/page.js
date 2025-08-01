import React from 'react'
import Hero from './components/Home/Hero'
import Client from './components/Home/Client'
import Card from './components/Home/Card'
import Cta from './components/Home/Cta'
const Home = () => {
  return (
    <div className='h-fit w-full'>
      <div>
      <Hero/>
      <Client/>
      <Card/>
      <Cta/>
      </div>
    </div>
  )
}

export default Home