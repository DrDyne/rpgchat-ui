import { combineReducers } from 'redux'

export const SCENE_SET = 'SCENE/SET'

const initialState = {
  sceneId: 0,
  ws: null,
  messageHistory: [],
}

export const chatLog = (state=initialState, action) => {
  switch(action.type) {
    case SOCKET_CREATED: {
      const { ws } = action
      return { ...state, ws }
    }
    case SOCKET_MESSAGE_RECEIVED: {
      const { type, message, name, color } = action.body
      const messageHistory = [...state.messageHistory, { type, message, name, color }]
      return { ...state, messageHistory }
    }
    case SCENE_SET: {
      const { sceneId } = action
      return { ...state, sceneId }
    }
  }
  return state
}

export default combineReducers({
  chatLog
})
