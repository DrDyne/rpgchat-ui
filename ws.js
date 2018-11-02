const WebSocket = require('ws')

const onMessage = ({send, ...ws} , {type, author, content, ...message}, {clientIP, ...user}) => {
  switch(type) {
    case 'roll': {
      console.log(`/roll ${content}`)
      // api call or sql operation
      // send(...something) 
    }
  }
}

const defaultOptions = {
  port: 8081,
  onClose: f=>f, 
  onConnect: f=>f,
  onMessage,
  onOpen: f=>f, 
}

const Messages = {
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


  server.on('connection', (ws, req) => {
    const clientIP = req.connection.remoteAddress
    const user = { clientIP, }

    console.log(`new connection from ${clientIP}`)
    ws.send(JSON.stringify({...Messages.system, content: 'connected'}))
    onConnect(ws)

    //broadcast
    server.clients.forEach(client => {
      if ( client === ws ) return;
      if ( client.readyState === WebSocket.OPEN ) 
        client.send(JSON.stringify({
          ...Messages.system,
          content: `${clientIP} connected`
        }))
    })

    ws.on('message', event => {
      console.log('received message')
      console.log(`raw/ ${event}`)
      const message = JSON.parse(event)
      console.log('parsed/', message)

      onMessage(ws, message, user)

      //broadcast
      server.clients.forEach(client => {
        if ( client === ws ) return;
        if ( client.readyState === WebSocket.OPEN ) client.send(event)
      })
    })

    ws.on('close', () => {
      console.log('disconnected')
      onClose(ws)
    })
  })

  return server
}

listen()
