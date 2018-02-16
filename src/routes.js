import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShelfA from './components/ShelfA';
import ShelfB from './components/ShelfB';
import ShelfC from './components/ShelfC';
import ShelfD from './components/ShelfD';




export default (

    <Switch>
        <Route path='/bins/A' component={ ShelfA }/>
        <Route path='/bins/B' component={ ShelfB }/>
        <Route path='/bins/C' component={ ShelfC }/>
        <Route path='/bins/D' component={ ShelfD }/>
    </Switch>
)