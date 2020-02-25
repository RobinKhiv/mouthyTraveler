import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import Home from '../Routes/Home'
import Blog from '../Routes/Blog'
import About from '../Routes/About'
import Banner from '../Banner/Banner'
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Navigation/>
    <Banner/>
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/blogTemplate'} component={Blog}/>
      <Route path={'/about'} component={About}/>
    </Switch>
    </React.Fragment>
  );
}

export default App;
