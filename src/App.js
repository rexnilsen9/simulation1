import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import routes from './routes'

import './reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='mainHeader'>
          <Link id='link' to='/'><h1>
            <img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true" alt=""></img>
            SHELFIE
            </h1></Link>
        </header>
        <Switch>
          <div className='linkwrapper'>
            <Link id='link' to='/bins/A'>Shelf A</Link><br /><br/>
            <Link id='link' to='/bins/B'>Shelf B</Link><br /><br/>
            <Link id='link' to='./bins/C'>Shelf C</Link><br /><br/>
            <Link id='link' to='./bins/D'>Shelf D</Link>
          </div>
        </Switch>
        {routes}
      </div>
    );
  }
}

export default App;
