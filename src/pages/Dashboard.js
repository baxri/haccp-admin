import React, { Component } from 'react'
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from '../routes/PrivateRoute';
import Settings from './Settings'
import Backups from './Backups'

export default class Dashboard extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

                    <a class="navbar-brand mr-1" href="index.html">Start Bootstrap</a>

                    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                        <i class="fas fa-bars"></i>
                    </button>

                </nav>

                <p>Dashboard</p>

                <Switch>
                    <Route path="/settings" component={Settings} />
                    <Route path="/" component={Backups} />
                </Switch>
            </div>
        )
    }
}