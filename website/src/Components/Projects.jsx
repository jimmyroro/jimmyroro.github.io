import React from 'react';
import upcloseLogo from '../pictures/upcloseLogo.svg';
import crawlLogo from '../pictures/crawlLogo.png';
import organizeLogo from '../pictures/organizeLogo.png';

const Projects = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">UpClose</h5>
              <img src={upcloseLogo} alt="Logo for UpClose" class="img-fluid"/>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Crawl</h5>
              <img src={crawlLogo} alt="Logo for Crawl" class="img-fluid"/>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Organize Power</h5>
              <img src={organizeLogo} alt="Logo for Organize Power" class="img-fluid"/>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
    </div>
  </div>
    
  ) 
}

export default Projects;