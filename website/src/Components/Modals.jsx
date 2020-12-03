import React from 'react';
import ReactPlayer from 'react-player'

const Modals = () => {
  return (
    <>
      {/* upCloseModal */}
      <div class="modal fade" tabindex="-1" role="dialog" id="upCloseModal" aria-labelledby="upCloseModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-75 mh-75" role="document">
          <div class="card modal-content card-body">
            <div class="modal-header">
              <h5 class="modal-title header">UpClose</h5>
            </div>
            <div class="modal-body">
              <p>
                Upclose is a website my team and I developed from greenfield to deployment. It allows users to create a party and invite people to join it. Once inside a party, WebRTC and socket.io allow users to see and hear each other. The twist is a spatial aspect, where audio diminishes as you get farther away from other user's avatars. I worked in the frontend and backend, using React hooks to build components and authenticate users via Google. Users and their parties were saved to a remote MYSQL database. I learned how to integrate TypeScript with React.js and how to style with Tailwind.
              </p>
            </div>
            <div className="col">
              <ReactPlayer id="upcloseVideo" url='upcloseDemo.mp4' controls="true" />
              <h5 className="header">Tech Stack</h5>
              <p>MySQL, Sequelize, Express, React, Node.js, TypeScript, Socket.IO, WebRtc, TailwindCss, GoogleCloud</p>
              <button type="button" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* organizePower modal */}
      <div class="modal fade" tabindex="-1" role="dialog" id="organizeModal" aria-labelledby="organizePowerModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-75 mh-75" role="document">
          <div class="card modal-content card-body">
            <div class="modal-header">
              <h5 class="modal-title header">Organize Power</h5>
              </div>
              <div class="modal-body">
                <p>
                 Organize Power is a website that my team and I modified. It is a platform for creating movements that people can join, learn about, and comment on. It was built with React.js, Node, Express, and MySQL. We added user stories to it, including messaging, linking charities, and creating events in a calendar
                </p>
              </div>
              <div className="col">
                <h5 className="header">Tech Stack</h5>
                <div className="row">
                  <p>MySQL, Sequelize, Express, React, Node, Passport, TailwindCSS, Google Cloud</p>
                </div>
                <button type="button" data-dismiss="modal">Close</button>
              </div>
          </div>
        </div>
      </div>
      {/* trivia modal */}
      <div class="modal fade" tabindex="-1" role="dialog" id="triviaModal" aria-labelledby="triviaModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-75 mh-75" role="document">
          <div class="card modal-content card-body">
            <div class="modal-header">
              <h5 class="modal-title header">Trivia</h5>
              </div>
              <div class="modal-body">
                <p>
                  This is a website I created as part of a job application. It's got twenty questions that are randomly chosen each time you play, and each user's highscore is stored in local storage. I deployed it with Netlify here: <a href="https://jimmyrorotrivia.netlify.app" target="blank" rel="noopener noreferrer" >https://jimmyrorotrivia.netlify.app.</a> I also incorporated some basic testing, using Jest.
                </p>
              </div>
              <div className="col">
                <h5 className="header">Tech Stack</h5>
                <div className="row">
                  <p>React, Node, Bootstrap, Netlify, Jest</p>
                </div>
                <button type="button" data-dismiss="modal">Close</button>
              </div>
          </div>
        </div>
      </div>
      {/* crawl modal */}
      <div class="modal fade" tabindex="-1" role="dialog" id="crawlModal" aria-labelledby="crawlModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-75 mh-75" role="document">
          <div class="card modal-content card-body">
            <div class="modal-header">
              <h5 class="modal-title header">Crawl</h5>
              </div>
                <div class="modal-body">
                  <p>
                    Crawl is a website that allows you to create a pub crawl and keep track of your buddies. We created it using Vue.js, Node, Express, and MySQL. We used Google to authenticate users, access and save the user's location, and search for bars near them.
                  </p>
                </div>
              <div className="col">
                <h5 className="header">Tech Stack</h5>
                <div className="row">
                  <p>MySQL, Express, Vue, Node, OAuth, Google Maps API, Azure, Twilio</p>
                </div>
                <button type="button" data-dismiss="modal">Close</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modals;