import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs'

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
      return (
        <GameChat 
          {...defaultProps} 
          sendMessage={content => {
            const newMessage = {
              author: 'storybook',
              content: content,
              time: this.state.messages.length
            }
            this.setState({
              messages: [ ...this.state.messages, newMessage ]
            })
          }}
          showAuthor={boolean('show author?', true)}
          onSend={action('message sent')}
          {...this.state}
        />
      )
    }
  }

  return <DemoGameChat />
})
