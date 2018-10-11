import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';
import BackgroundSlideshow from 'react-background-slideshow';

import '../pages/AppLogin.css';

import image1 from '../assets/img/_MG_0361.jpg';
import image2 from '../assets/img/_MG_0365.jpg';
import image3 from '../assets/img/back.png';
import image4 from '../assets/img/_MG_0384.jpg';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App_app">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;