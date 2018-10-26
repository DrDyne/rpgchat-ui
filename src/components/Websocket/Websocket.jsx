import React from 'react'

export default class Websocket extends React.Component {
  state = {
    ws: null
  }

  componentDidMount() {
    const {createSocket, url, timeout, ...handlers} = this.props
    const ws = createSocket(url, {timeout, ...handlers})
    this.setState({ws})
  }

  componentWillUnmount() {
    const { ws } = this.state
    if (ws) ws.close()
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
