import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Sockette from 'sockette'

import WebSocket from '../../../components/Websocket/Websocket'
import GameChat from '../GameChat'

import Box, { styled, Input } from '../../../theme'

const defaultProps = {
  onClickContent: action('clicked content'),
  onClickAuthor: action('clicked author'),
}

storiesOf('Pages/GameChat', module)
.addDecorator(withKnobs)

.add('default', () => <GameChat {...defaultProps} />)
.add('content overflow', () => {
  const messages = [{
    type: 'system',
    content: 'Connected!',
  }, {
    type: 'GM',
    author: 'WOWF',
    content: 'Hello, this is your GM speaking.',
    authorColorId: 0,
  }, {
    author: 'Bobby',
    content: 'Hello, this is Bobby speaking...',
    authorColorId: 1,
  }, {
    author: 'J',
    content: 'Hello, this is Jane speaking...',
    authorColorId: 2,
  }, {
    type: 'roll',
    author: 'player3hasareallylongname!',
    content: 'rolled 9', // WIP display .result instead, and remove .content
    result: 9,
    dice: [{type: 'd4', qty: 1, mod: 2, total: 3}, {type: 'd8', qty: 1, total: 6}],
    authorColorId: 3,
  }, {
    type: 'roll',
    author: 'Bobby',
    content: 'rolled 35', // WIP display .result instead, and remove .content
    result: 35,
    dice: [{type: 'd6', qty: 8, mod: 8, total: 35}],
    authorColorId: 1,
  }, {
    author: 'Bobby',
    content: 'Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking...  Hello, this is Bobby speaking... Hello, this is Bobby speaking...',
    authorColorId: 1,
  }, {
    type: 'system',
    content: 'Connected to WOWF as Storybook',
  }, {
    type: 'system',
    content: 'Welcome Player4 (123.123.123.123 connected)'
  }, {
    type: 'whisper',
    to: 'player-123',
    content: 'Hello "player-123", only you and I can read this.',
    authorColorId: 1,
    whisperColorId: 5,
  }, {
    type: 'whisper',
    author: 'player-234',
    to: 'Storybook',
    content: 'Hello "Storybook", only you and I can read this.',
    authorColorId: 4,
    whisperColorId: 1,
  }, {
    type: 'whisper',
    to: 'player-XXX',
    content: 'Hello "player-XXX", only you and I can read this.',
    authorColorId: 1,
    whisperColorId: 11
  }]

  return <GameChat {...defaultProps} messages={[...messages, ...messages]} />
})

.add('demo messages with ws', () => {
  const showAuthor = boolean('show author?', true)

  class DemoGameChat extends React.Component {
    state = {
      ws: null,
      messages: [{content: 'logged in as Storybook'}],
    }

    render () {
      const socketProps = {
        createSocket: (url, options) => {
          const ws = new Sockette(url, options)
          this.setState({ws})
          return ws
        },
        onmessage: event => {
          const { ws, messages } = this.state
          if ( !ws ) return;

          const { data } = event
          const message = JSON.parse(data)
          this.setState({ messages: [ ...messages, message ] })
        }
      }

      const gameChatProps = {
        ...defaultProps,
        messages: this.state.messages,
        send: msg => {
          const { ws } = this.state
          const message = {
            ...msg,
            author: 'Storybook',
            time: this.state.messages.length
          }
          this.setState({messages: [...this.state.messages, message]})
          ws.send(JSON.stringify(message))
        },
        showAuthor,
        onSend: action('gamechat: message sent')
      }

      return (
        <React.Fragment>
          <WebSocket {...socketProps} />
          <GameChat {...gameChatProps} />
        </React.Fragment>
      )
    }
  }

  return <DemoGameChat />
})
