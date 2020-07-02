/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setupWebsocket from './services/ws';

const print = () => {
    console.log('print');
    return setupWebsocket('ws://localhost:2005/echo').then(({send, receive}) => {
        send('echo');
        receive(function(data){
            console.log(data);
        });
        return 'hello';
    });
};

print().then((name) => {
    console.log(name);
    ReactDOM.render(
        <App/>, 
        document.getElementById('app')
    );
});
