import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ShelfA from './components/ShelfA/ShelfA';
import ShelfB from './components/ShelfB/ShelfB';
import ShelfC from './components/ShelfC/ShelfC';
import ShelfD from './components/ShelfD/ShelfD';




export default (

    <Switch>
        <Route exact path='/bins/A' component={ ShelfA }/>
        <Route path='/bins/B' component={ ShelfB }/>
        <Route path='/bins/C' component={ ShelfC }/>
        <Route path='/bins/D' component={ ShelfD }/>
    </Switch>
)