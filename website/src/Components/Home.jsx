import React from 'react'
import profile from '../assets/profile.jpg'
import Cards from './Cards'

const Home = () => {
  return (
    <div class="container">
      <div class="row flex">
        <div className="col-1/3 flex">
          <img id="selfie" src={profile} alt="me" />
        </div>
        <div className="col flex">
          <p id="intro">
            I'm a software developer looking for my next project. I've worked front end and backend, and am always up to learn new things. Check out my latest projects below, and don't hesitate to reach out to me!
          </p>
        </div>
      </div>
      <div class="row flex pb-5 pt-5">
        <Cards/>
      </div>
    </div>
  )
}

export default Home;