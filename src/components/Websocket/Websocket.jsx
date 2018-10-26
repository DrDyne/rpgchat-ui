import React from 'react'

export default class Websocket extends React.Component {
  componentDidMount() {
    const {createSocket, url, timeout, ...handlers} = this.props
    this.ws = createSocket(url, {timeout, ...handlers})
  }

  componentWillUnmount() {
    if ( this.ws ) this.ws.close()
  }

  render () { return null }
}

Websocket.defaultProps = {
  createSocket: f => f,
  //url: 'ws://wolfwares.ca:12345/rpgchat/server.php',
  url: 'ws://localhost:8081',
  timeout: 800,
  onopen: f => f,
  onmessage: f => f,
  onreconnect: f => f,
  onmaximum: f => f,
  onclose: f => f,
  onerror: f => f,
}
