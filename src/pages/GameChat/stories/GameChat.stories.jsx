import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Sockette from 'sockette'

import WebSocket from '../../../components/Websocket/Websocket'
import GameChat from '../GameChat'

const defaultProps = {
  onClickContent: action('clicked content'),
  onClickAuthor: action('clicked author'),
  messages: [{content: 'hello', author: 'storybook'}],
}

storiesOf('Pages/GameChat', module)
.addDecorator(withKnobs)

.add('default', () => <GameChat {...defaultProps} />)
.add('demo messages', () => {
  class DemoGameChat extends React.Component {
    state = {
      messages: [],
    }

    render () {
      const socketProps = {
        createSocket: (url, options) => {
          this.setState({ws: new Sockette(url, options)})
        },
        onmessage: event => {
          const { ws, messages } = this.state
          if ( !ws ) return;

          const { data } = event
          const message = JSON.parse(data)
          console.log(event, message, this.state)
          this.setState({ messages: [ ...messages, message ] })
        }
      }

      const gameChatProps = {
        ...defaultProps,
        messages: this.state.messages,
        sendMessage: content => {
          const { ws } = this.state
          const message = {
            author: 'storybook',
            content: content,
            time: this.state.messages.length
          }
          this.setState({messages: [...this.state.messages, message]})
          ws.send(JSON.stringify(message))
        },
        showAuthor: boolean('show author?', true),
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
