import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ChatInput from '../ChatInput'

const actions = {
  onChange: action('value changed'),
  onKeyPress: action('key press'),
  onSend: action('send'),
  send: action('send message'),
}

const defaultProps = {
}

const withSticky = story =>
  <div style={{position: 'fixed', bottom: 0, width: '100%'}}>
    {story()}
  </div>

storiesOf('Components/ChatInput', module)
.addDecorator(withSticky)

.add('default', () => <ChatInput {...actions} {...defaultProps} />)

