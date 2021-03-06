import { connect } from 'react-redux'
import Sockette from 'sockette'

import { 
  receivedMessage, 
  socketClosed,
  socketConnected, 
  socketCreated, 
} from '../../actions'

export const mapDispatchToProps = dispatch => ({
  createSocket: (url, options) => {
    const ws = new Sockette(url, options)
    dispatch(socketCreated(ws)) // save ws instance in store
    return ws
  },
  onmessage: data => dispatch(receivedMessage(data)),
  onopen: data => {
    console.log('connected!')
    dispatch(socketConnected(data))
  },
  onclose: data => dispatch(socketClosed(data)),
})

export default connect(null, mapDispatchToProps)
