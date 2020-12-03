import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div class="container-fluid" id="navbar">
          <div class="row">
            <div class="col-sm">
              <Link to="/">Bio</Link>
            </div>
            <div class="col-sm">
              <a href="https://www.linkedin.com/in/richard-james-rosier/" target="blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div class="col-sm">
              <a href="https://github.com/jimmyroro" target="blank" rel="noopener noreferrer">Github</a>
            </div>
            <div class="col-sm">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        
  )
}

export default Navbar;