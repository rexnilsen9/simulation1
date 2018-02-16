import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='mainHeader'>
          <h1>Shelfie</h1>
        </header>
        <div className='linkwrapper'>
         <Link to='/bins/A'>Shelf A</Link><br/>
         <Link to='/bins/B'>Shelf B</Link><br/>
         <Link to='./bins/C'>Shelf C</Link><br/>
         <Link to='./bins/D'>Shelf D</Link>
        </div>
      { routes }
      </div>
    );
  }
}

export default App;
