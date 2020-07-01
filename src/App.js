/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={ Home }/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;