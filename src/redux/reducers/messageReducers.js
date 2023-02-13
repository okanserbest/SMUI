import {SET_MESSAGES_SWAP, NEW_MESSAGES} from '../actions/types';
import  {initialState, }from '../initialState/messagesInitialState'

const messageReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES_SWAP:
      return {
        ...state,
        messageSwap:[...action.allSwapMessage]
       
      };
    case NEW_MESSAGES:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default messageReducers;
