import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from '../routes/PrivateRoute';
import Settings from './Settings'
import Backups from './Backups'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <Switch>
                    <PrivateRoute path="/settings" component={Settings} />
                    <PrivateRoute path="/" component={Backups} />
                </Switch>
            </div>
        )
    }
}