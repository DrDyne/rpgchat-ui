import { SCENE_SET } from '../reducers'

export const changeScene = sceneId => ({ type: SCENE_SET, sceneId })


export const socketCreated = ws => ({ type: SOCKET_CREATED, ws })
export const socketConnected = f => f
export const receivedMessage = data => ({ type: SOCKET_MESSAGE_RECEIVED, body: data })
export const socketClosed = f => f
