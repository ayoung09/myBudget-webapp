import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
  </Router>
);

export default App;
