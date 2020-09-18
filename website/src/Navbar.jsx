import React from 'react';

const Navbar = () => {
  return (
    <div class="container-fluid" id="navbar">
        <div class="row">
          <div class="col-sm">
            Bio
          </div>
          <div class="col-6" id="projects-header">
            Projects
          </div>
          <div class="col-sm">
            <a href="www.linkedin.com/in/richard-james-rosier">LinkedIn</a>
          </div>
          <div class="col-sm">
            Contact
          </div>
        </div>
      </div>
  )
}

export default Navbar;