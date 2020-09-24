import React from 'react';
import profile from '../pictures/profile.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div class="container">
        <div class="row">
            <img id="selfie" src={profile} alt="me"></img>
            <p id="intro">
              I'm a software developer looking for my next project. I've worked front end and backend, and am always up to learn new things. Check out my latest projects, and don't hesitate to reach out to me!
            </p>
        </div>

      </div>
  )
}

export default Home;