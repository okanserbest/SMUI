import {SET_MESSAGES_SWAP, NEW_MESSAGE} from '../actions/types';
import {initialState} from '../initialState/messagesInitialState';

const messageReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES_SWAP:
      return {
        ...state,
        messageSwap: [...action.allSwapMessage],
      };
    case NEW_MESSAGE:
      const newMessage = state.map(user => {
        if (user.userId == action.newMessageInfo.userId) {
          user.messages.push({
            message: action.newMessageInfo.newMessage,
            senderID: 0,
          });
          return {...user, messages:user.messages};
        } else {
          return user;
        }
        
      });
      return [...newMessage];
    default:
      return state;
  }
};

export default messageReducers;
