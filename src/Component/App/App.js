import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home'
import Blog from '../Routes/Blog'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/blogTemplate'} component={Blog}/>
    </Switch>
  );
}

export default App;
