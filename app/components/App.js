import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import List from './List'
import Home from './Home'

export default ({ pokemon }) => (
    <div>
        Working!!!
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemon" exact component={List} />
        </Switch>
    </div>
)