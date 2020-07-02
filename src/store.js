import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxWebsocket from '@giantmachines/redux-websocket';
import rootReducers from './reducers';


// Create the middleware instance.
const reduxWebsocketMiddleware = reduxWebsocket();

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(reduxWebsocketMiddleware, thunkMiddleware)
        )
  );

export default store;