import React from 'react';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import './App.css';
//import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
