import {SET_MESSAGES, NEW_MESSAGE} from "./types";

export const setMessages = allMessage => ({
  type: SET_MESSAGES,
  allMessage
})

export const newSendMessage = (newMessageInfo) =>  {
  return({
      type: NEW_MESSAGE,
      newMessageInfo
    })
}
