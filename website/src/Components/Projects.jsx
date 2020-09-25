import React from 'react';
import upcloseLogo from '../pictures/upcloseLogo.svg';
import crawlLogo from '../pictures/crawlLogo.png';
import organizeLogo from '../pictures/organizeLogo.png';

const mist = {
  backgroundColor: "#90AFC5",
}

const Projects = () => {
  return (
    <div class="card-group">
      <div class="card" style={mist}>
        <img class="card-img-top h-50" src={upcloseLogo} alt="Logo for Upclose" />
        <div class="card-body">
          <h5 class="card-title text-center">Title</h5>
          <p class="card-text">card text</p>
        </div>
      </div>
      <div class="card" style={mist}>
        <img class="card-img-top h-50" src={organizeLogo} alt="Logo for Upclose" />
        <div class="card-body">
          <h5 class="card-title text-center">Organize power</h5>
          <p class="card-text">card text</p>
          <a href='https://github.com/Apptonomy/organizepower' target="_blank"><button>Repo</button></a>
        </div>
      </div>
      <div class="card" style={mist}>
        <img class="card-img-top h-50" src={crawlLogo} alt="Logo for Upclose" />
        <div class="card-body">
          <h5 class="card-title text-center">Crawl</h5>
          <p class="card-text">text</p>
          <a href='https://github.com/Apptonomy/Crawl' target="_blank"><button>Repo</button></a>
        </div>
      </div>
    </div>
  ) 
}

export default Projects;