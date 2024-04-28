import React from 'react'
import HomeStates from '../components/HomaStats'
import Testimonial from '../components/Testimonial'
import Loading from '../components/Loading'

const Home = () => {
  return (
    <div className='m-auto w-screen sm:w-4/5 lg:w-3/5'>
      <HomeStates />
      <Testimonial />
    </div>
  )
}

export default Home
