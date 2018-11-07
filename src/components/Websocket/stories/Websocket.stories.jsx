import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs'

import Sockette from 'sockette'
import Websocket from '../Websocket'

const actions = {
  onopen: action('open'),
  onmessage: action('message'),
  onreconnect: action('reconnect'),
  onmaximum: action('max retries'),
  onclose: action('close'),
  onerror: action('error'),
  createSocket: () => ({close: action('closing socket')})
}

storiesOf('Websocket', module)
.addDecorator(withKnobs)

.add('test connection', () => <Websocket {...actions} createSocket={(url, options) => new Sockette(url, options)} />)
