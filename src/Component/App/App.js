import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import Home from '../Routes/Home'
import Blog from '../Routes/Blog'
import About from '../Routes/About'
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Navigation/>
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/blogTemplate'} component={Blog}/>
      <Route path={'/about'} component={About}/>
    </Switch>
    </React.Fragment>
  );
}

export default App;
