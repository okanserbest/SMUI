import {combineReducers, createStore} from 'redux';

import messageReducers from './reducers/messageReducers';


const appReducer = combineReducers({
  messageReducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const configureStore = () => createStore(rootReducer);

export default configureStore;
