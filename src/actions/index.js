import { SCENE_SET } from '../reducers'

export const changeScene = sceneId => ({ type: SCENE_SET, sceneId })

import { 
  SOCKET_CLOSED,
  SOCKET_CONNECTED,
  SOCKET_CREATED,
  SOCKET_MESSAGE_RECEIVED,
} from '../reducers'

export const receivedMessage = body => ({ type: SOCKET_MESSAGE_RECEIVED, body })
export const socketClosed = event => ({SOCKET_CLOSED, event})
export const socketConnected = event => ({SOCKET_CONNECTED, event})
export const socketCreated = ws => ({ type: SOCKET_CREATED, ws })
