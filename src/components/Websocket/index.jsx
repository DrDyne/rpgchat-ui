import React from 'react'

export default class Websocket extends React.Component {
  componentDidMount() {
    const {createSocket, url, timeout, ...handlers} = this.props
    console.log('socket')
    this.ws = createSocket(url, {timeout, ...handlers})
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render () {
    return <React.Fragment />
  }
}

Websocket.defaultProps = {
  createSocket: f => f,
  url: 'ws://wolfwares.ca:12345/rpgchat/server.php',
  timeout: 800,
  onopen: f => f,
  onmessage: f => f,
  onreconnect: f => f,
  onmaximum: f => f,
  onclose: f => f,
  onerror: f => f,
}
