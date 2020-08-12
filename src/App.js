import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe/AboutMe"
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
// import Portfolio from "./pages/Portfolio"
// import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
