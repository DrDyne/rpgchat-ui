import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ChatInput from '../ChatInput'

const actions = {
  onChange: action('value changed'),
  onKeyPress: action('key press'),
  onSend: action('send'),
  sendMessage: action('send message'),
}

const defaultProps = {
}

storiesOf('Components/ChatInput', module)

.add('default', () => <ChatInput {...actions} {...defaultProps} />)

