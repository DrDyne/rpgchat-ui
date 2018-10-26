const WebSocket = require('ws')

const defaultOptions = {
  port: 8081,
  onClose: f=>f, 
  onConnect: f=>f,
  onMessage: f=>f,
  onOpen: f=>f, 
}
const messages = {
  system: { type: 'system' },
  gm: { type: 'gm' },
  whisper: { type: 'whisper', from: undefined, to: undefined },
  local: { type: 'local' },
  scene: { type: 'scene', sceneId: undefined },
  roll: { type: 'roll', content: undefined }
}

const listen = (options=defaultOptions) => {
  const { port, onClose, onConnect, onMessage, onOpen } = options
  const server = new WebSocket.Server({ port })
  console.log(`server listening on port ${port}`)

  server.on('close', () => {
    console.log('disconnected')
    onClose(server)
  })

  server.on('connection', (ws, req) => {
    const clientIP = req.connection.remoteAddress
    console.log(`new connection from ${clientIP}`)
    ws.send(JSON.stringify({type: 'system', content: 'connected'}))
    onConnect(ws)

    ws.on('message', event => {
      console.log('on message')
      console.log('/raw', event)
      const message = JSON.parse(event)
      console.log('/parsed', message)
      onMessage(ws, message)

      //broadcast
      server.clients.forEach(client => {
        if ( client === ws ) return;
        if ( client.readyState === WebSocket.OPEN ) client.send(event)
      })
    })
  })

  return server
}

listen()
