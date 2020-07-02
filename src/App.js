/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import store from './store';
import {connect, send} from '@giantmachines/redux-websocket';

store.dispatch(connect('ws://localhost:2005/echo'));
store.dispatch(send({my:'message'}));
class App extends React.Component {
    constructor(props) {
        super(props);
    
    }

    componentDidMount() {
    
    }
    
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;