import { combineReducers } from 'redux'

export const SCENE_SET = 'SCENE/SET'

const initialState = {
  sceneId: 0,
}

export const chatLog = (state=initialState, action) => {
  switch(action.type) {
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
