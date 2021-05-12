import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import './helpers.scss'
import {BrowserRouter, NavLink, Route,Switch } from "react-router-dom";
import Profile from './Profile';
import OrderSummary from './Order-Summary';
import { togglenav } from './togglenav';


function App() {
    return (

        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/orders" render={(props) => <OrderSummary {...props} />} />
                    <Route exact path="/" render={(props) => <Profile {...props} />} />
                </Switch>

            </Fragment>

        </BrowserRouter>
    );
}

export default App;
