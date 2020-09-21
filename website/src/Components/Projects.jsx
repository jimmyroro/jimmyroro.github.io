import React from 'react';
import upcloseLogo from '../pictures/upcloseLogo.svg';
import crawlLogo from '../pictures/crawlLogo.png';
import organizeLogo from '../pictures/organizeLogo.png';

const Projects = () => {
  return (
    <div class="card-group">
      <div class="card">
        <img class="card-img-top h-50" src={upcloseLogo} alt="Logo for Upclose" />
        <div class="card-body">
          <h5 class="card-title">UpClose</h5>
          <p class="card-text">Upclose is a website my team and I developed from greenfield to deployment. It allows users to create a party and invite people to join it. Once inside a party, WebRTC and socket.io allow users to see and hear each other. There is a spatial aspect too, where audio diminishes as you get farther away from other users’ avatars.  I worked in the fronted and backend, using React hooks to build out the frontend and authenticated users with Google Login, saving the users and their parties to a remote MYSQL database. I learned how to integrate Typescript with React.js, and how to style with Tailwind instead of traditional CSS.</p>
          <a href="https://upclose.uc.r.appspot.com/" class="btn btn-primary">Website</a>
          <a href="https://github.com/HearTogether/upclose" class="btn btn-primary">Repo</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top h-50" src={organizeLogo} alt="Logo for Upclose" />
        <div class="card-body">
          <h5 class="card-title">Organize power</h5>
          <p class="card-text">Organize power is a website that my team and I modified. It is a platform for creating movements that people can join and learn about, and was built with React.js, Node, Express, and MySQL. We added user stories to it, including messaging, linking charities, and creating events in a calendar.</p>
          <a href="https://github.com/Apptonomy/organizepower" class="btn btn-primary">Repo</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top h-50" src={crawlLogo} alt="Logo for Upclose" />
        <div class="card-body">
          <h5 class="card-title">Crawl</h5>
          <p class="card-text">Crawl is a website that allows you to create a pub crawl and keep track of your buddies. We created it using Vue.js, Node, Express, and MySQL. We used Google to authenticate users, and also to allow users to search on a map for bars to save for their crawl.</p>
          <a href="https://github.com/Apptonomy/Crawl" class="btn btn-primary">Repo</a>
        </div>
      </div>
    </div>
  ) 
}

export default Projects;