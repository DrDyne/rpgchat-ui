import { connect } from 'react-redux'
import Sockette from 'sockette'
import { receivedMessage, socketConnected, socketClosed } from '../actions'

const mapDispatchToProps = dispatch => ({
  createSocket: (url, options) => {
    const ws = new Sockette(url, options)
    dispatch(socketCreated(ws)) // save ws instance in store
  },
  onmessage: data => dispatch(receivedMessage(data)),
  onopen: data => {
    console.log('connected!')
    dispatch(socketConnected(data))
  },
  onclose: data => dispatch(socketClosed(data)),
})

export default connect(null, mapDispatchToProps)
