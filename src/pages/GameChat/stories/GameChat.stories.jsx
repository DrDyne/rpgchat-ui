import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Sockette from 'sockette'

import WebSocket from '../../../components/Websocket/Websocket'
import GameChat from '../GameChat'

import Box, { styled, Input } from '../../../theme'

const withDemoBox = story => {
  const DemoBox = styled(Box)`
    * { 
      width: 100%;
      flex-direction: column;
    }

    ${Input} {
      font-size: 36px;
    }
  `

  return <DemoBox>{story()}</DemoBox>
}

const defaultProps = {
  onClickContent: action('clicked content'),
  onClickAuthor: action('clicked author'),
}

storiesOf('Pages/GameChat', module)
.addDecorator(withKnobs)
.addDecorator(withDemoBox)

.add('default', () => <GameChat {...defaultProps} />)
.add('demo messages', () => {
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
        send: content => {
          const { ws } = this.state
          const message = {
            author: 'Storybook',
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
