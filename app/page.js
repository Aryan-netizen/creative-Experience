import React from 'react'
import Hero from './components/Hero'
import Client from './components/Client'
import Card from './components/Card'
import Cta from './components/Cta'

const page = () => {
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

export default page