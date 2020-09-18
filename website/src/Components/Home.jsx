import React from 'react';
import profile from '../pictures/profile.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div class="container" id="bio-body">
        <div class="row">
          <div class="col-sm">
            <img src={profile} alt="me"></img>
          </div>
          <div class="col-sm">
            <div class="row">
              I'm a software developer looking for my next project. I've worked front end and backend, and am always up to learn new things. Check out my latest projects below, and don't hesitate to reach out to me!
            </div>
            <div class="row">
              <Link to="./projects">link to projects? pictures of them or something?</Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;