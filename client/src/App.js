import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

import Form from './components/Form';
import ViewData from './components/ViewData';
class App extends Component {
    render() {
        return (
            <div>
                <Home>
                    <Route path="/postmessage" component={Form} />
                    <Route path="/viewmessages" component={ViewData} />
                </Home>
            </div>
        );
    }
}

export default App;
