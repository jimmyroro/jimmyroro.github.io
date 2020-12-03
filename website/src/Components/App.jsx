import React from 'react';
import Navbar from './Navbar';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'


function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar/>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
