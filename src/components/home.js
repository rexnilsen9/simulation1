import React, { Component } from'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className='linkwrapper'>
            <Link id='link' to='/bins/A'>Shelf A</Link><br /><br/>
            <Link id='link' to='/bins/B'>Shelf B</Link><br /><br/>
            <Link id='link' to='./bins/C'>Shelf C</Link><br /><br/>
            <Link id='link' to='./bins/D'>Shelf D</Link>
          </div>
        )
    }

}