import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../dashboard/Dashboard'
import Cadastro from '../cadastro/Cadastro'

export default () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/register" component={Cadastro} />
        <Redirect to="/" />
    </Switch>
)
