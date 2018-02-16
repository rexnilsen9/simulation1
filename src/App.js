import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import routes from './routes'
import Home from './components/home';

import './reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='mainHeader'>
          <Link id='link' to='/'><h1>
            <img src="https://github.com/DevMountain/simulation-1/blob/master/assets/logo.png?raw=true" alt="Shelfie Logo"></img>
            SHELFIE
            </h1>
          </Link><br />
        </header>
        <Switch>
          <div className='home'>
            <Home />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
