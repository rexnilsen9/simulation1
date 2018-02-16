import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class ShelfA extends Component {
    render () {
        return(
            <div className='bins'>
                <Link to='/create/A1'>Bin 1</Link><br/>
                <Link to='/create/A2'>Bin 2</Link><br/>
                <Link to='/create/A3'>Bin 3</Link><br/>
                <Link to='/create/A4'>Bin 4</Link><br/>
                <Link to='/create/A5'>Bin 5</Link>
            </div>

        );
    }
}