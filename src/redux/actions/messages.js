import {SET_MESSAGES, NEW_MESSAGE} from "./types";

export const setMessages = allMessage => ({
  type: SET_MESSAGES,
  allMessage
})

export const newMessage = message => ({
  type: NEW_MESSAGE,
  message
})
