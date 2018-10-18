import { dispatch } from 'react-redux'
import { SCENE_SET } from '../reducers'

export const changeScene = sceneId => dispatch({ type: SCENE_SET, sceneId })
