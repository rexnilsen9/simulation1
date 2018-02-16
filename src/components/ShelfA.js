import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class ShelfA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bins: ['bin1', 'bin2', 'bin3', 'bin4', 'bin5']
        }
    }
    render() {
        let bin = this.state.bins.map((item, i) => {
            return (
                <Link to={`/bins/A/${item}`} key={i}>
                    <p>{ item }</p>
                </Link>
            )
        })
        return (
            <div className='bins'>
                <h1>Shelf A</h1>
                {bin}
            </div>
        );
    }
}