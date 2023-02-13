import {combineReducers, createStore} from 'redux';

import messageReducers from './reducers/messageReducers';
import {UserMessagesType} from "./initialState/messagesInitialState";
export interface AppState {
  message:UserMessagesType
}

const rootReducer = combineReducers({
  message:messageReducers,
});

export default rootReducer;
