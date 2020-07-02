import { combineReducers } from 'redux';
import messageReducer from './message_reducer';


const rootReducers = combineReducers({
    message: messageReducer
});

export default rootReducers;