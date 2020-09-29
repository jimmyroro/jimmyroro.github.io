import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects'

const Navbar = () => {
  return (
    <Router>
      <div class="container-fluid" id="navbar">
          <div class="row">
            <div class="col-sm">
              <Link to="/">Bio</Link>
            </div>
            <div class="col-sm">
              <a href="https://www.linkedin.com/in/richard-james-rosier/">LinkedIn</a>
            </div>
            <div class="col-sm">
              <a href="https://github.com/jimmyroro">Github</a>
            </div>
            <div class="col-sm">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  )
}

export default Navbar;