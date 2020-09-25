import React from 'react';
import profile from '../pictures/profile.jpg';
import upcloseLogo from '../pictures/upcloseLogo.svg';
import crawlLogo from '../pictures/crawlLogo.png';
import organizeLogo from '../pictures/organizeLogo.png';

const Home = () => {
  return (
    <div class="container">
      <div class="row">
        <div className="col-1/3">
          <img id="selfie" src={profile} alt="me"></img>
        </div>
        <div className="col">
          <div className="row">
            <p id="intro">
              I'm a software developer looking for my next project. I've worked front end and backend, and am always up to learn new things. Check out my latest projects, and don't hesitate to reach out to me!
            </p>
          </div>
          <div className="row">
            <div class="card-group">
              <div class="card">
                <img class="card-img-top" src={upcloseLogo} alt="Logo for Upclose" />
                <div class="card-body">
                  <h5 class="card-title text-center">Upclose</h5>
                  <p class="card-text">Video chat with friends, with a spatial twist</p>
                  <button type="button" data-toggle="modal" data-target="#upCloseModal">More</button>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={organizeLogo} alt="Logo for Organize Power" />
                <div class="card-body">
                  <h5 class="card-title text-center">Organize power</h5>
                  <p class="card-text">A platform for creating and sharing movements</p>
                  <button type="button" data-toggle="modal" data-target="#organizeModal">More</button>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={crawlLogo} alt="Logo for Upclose" />
                <div class="card-body">
                  <h5 class="card-title text-center">Crawl</h5>
                  <p class="card-text">Adventurous drinking and travel website</p>
                  <button type="button" data-toggle="modal" data-target="#crawlModal">More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* upCloseModal */}
      <div class="modal fade" id="upCloseModal" tabindex="-1" role="dialog" aria-labelledby="upCloseModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="card">
            {/* <img class="card-img-top h-50" src={upcloseLogo} alt="Logo for Upclose" /> */}
            <div class="card-body">
              <h5 class="card-title text-center">UpClose</h5>
              <p class="card-text">Upclose is a website my team and I developed from greenfield to deployment. It allows users to create a party and invite people to join it. Once inside a party, WebRTC and socket.io allow users to see and hear each other. There is a spatial aspect too, where audio diminishes as you get farther away from other users’ avatars.  I worked in the fronted and backend, using React hooks to build out the frontend and authenticated users with Google Login, saving the users and their parties to a remote MYSQL database. I learned how to integrate Typescript with React.js, and how to style with Tailwind instead of traditional CSS.</p>
              <div className="row">
                <div className="col">
                  <a href='https://upclose.uc.r.appspot.com/' target="_blank"><button class="modalButton">Website</button></a>
                </div>
                <div className="col">
                  <a href='https://github.com/HearTogether/upclose' target="_blank"><button class="modalButton">Repo</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* organizePower modal */}
      <div class="modal fade" id="organizeModal" tabindex="-1" role="dialog" aria-labelledby="organizePowerModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="card">
            {/* <img class="card-img-top h-50" src={organizeLogo} alt="Logo for Organize Power" /> */}
            <div class="card-body">
              <h5 class="card-title text-center">Organize Power</h5>
              <p class="card-text">Organize Power is a website that my team and I modified. It is a platform for creating movements that people can join and learn about, and was built with React.js, Node, Express, and MySQL. We added user stories to it, including messaging, linking charities, and creating events in a calendar.</p>
              <a href='https://github.com/Apptonomy/organizepower' target="_blank"><button class="modalButton">Repo</button></a>
            </div>
          </div>
        </div>
      </div>
      {/* crawl modal */}
      <div class="modal fade" id="crawlModal" tabindex="-1" role="dialog" aria-labelledby="crawlModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="card">
            {/* <img class="card-img-top h-50" src={crawlLogo} alt="Logo for Crawl" /> */}
            <div class="card-body">
              <h5 class="card-title text-center">Crawl</h5>
              <p class="card-text">Crawl is a website that allows you to create a pub crawl and keep track of your buddies. We created it using Vue.js, Node, Express, and MySQL. We used Google to authenticate users, access and save the user's location, and search for bars near them.</p>
              <a href='https://github.com/Apptonomy/Crawl' target="_blank"><button class="modalButton">Repo</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;