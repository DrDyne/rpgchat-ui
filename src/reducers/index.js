import { combineReducers } from 'redux'

export const SCENE_SET = 'SCENE/SET'
export const SOCKET_CLOSED = 'WS/CLOSED'
export const SOCKET_CONNECTED = 'WS/CONNECTED'
export const SOCKET_CREATED = 'WS/CREATED'
export const SOCKET_MESSAGE_RECEIVED = 'WS/MESSAGE/RECEIVED'
export const SOCKET_SEND = 'WS/SEND'

const initialState = {
  sceneId: 0,
  ws: null,
  isSocketReady: true,
  messageHistory: [],
}

export const chatLog = (state=initialState, action) => {
  switch(action.type) {
    case SOCKET_CREATED: {
      const { ws } = action
      return { ...state, ws }
    }

    case SOCKET_CONNECTED: {
      return { ...state, isSocketReady: true }
    }

    case SOCKET_CLOSED: {
      return { ...state, isSocketReady: false }
    }

    case SOCKET_MESSAGE_RECEIVED: {
      const { type, message, name, color } = action.body
      const messageHistory = [...state.messageHistory, { type, message, name, color }]
      return { ...state, messageHistory }
    }

    case SOCKET_SEND: {
      if ( !state.ws ) return state
      ws.send(action.body)
      return state
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
