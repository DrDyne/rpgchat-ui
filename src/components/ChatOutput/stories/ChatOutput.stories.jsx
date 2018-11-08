import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ChatOutput from '../ChatOutput'

const actions = {
  onClickContent: action('clicked content'),
  onClickAuthor: action('clicked author')
}

storiesOf('Components/ChatOutput', module)
.addDecorator(withKnobs)

.add('messages types', () => {
  const showAuthor = boolean('showAuthor?', true)
  const showTime = boolean('showTime?', true)
  const props = {
    ...actions,
    showAuthor,
    showTime,
    messages: [{
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
      type: 'system',
      content: 'sent whisper to player-123: "@player-123 Hello "player-123", only you and I can read this."',
    }, {
      type: 'whisper',
      to: 'player-123',
      content: 'Hello "player-123", only you and I can read this.',
      authorColorId: 1,
      whisperColorId: 5,
    }, {
      type: 'system',
      content: 'received whisper from player-234, as Storybook',
    }, {
      type: 'whisper',
      author: 'player-234',
      to: 'Storybook',
      content: 'Hello "Storybook", only you and I can read this.',
      authorColorId: 4,
      whisperColorId: 1,
    }, {
      type: 'system',
      content: 'sent whisper to J',
    }, {
      type: 'whisper',
      to: 'J',
      content: 'Hello J, only you and I can read this.',
      authorColorId: 1,
      whisperColorId: 2
    }]
  }

  return <ChatOutput {...props} />
})
