import React from 'react';
import './App.css';
import Navbar from './includes/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './includes/Footer';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
   <Router>

    <div>
     <Navbar />
    <Switch>

      <Route exact path="/">
       <Home />
      </Route>

      <Route path="/about">
      <About />
      </Route>

      <Route path="/contact">
      <Contact />
      </Route>

    </Switch>
    <Footer />

    </div>
  </Router>
  );
}

export default App;

