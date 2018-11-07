import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ChatOutput from '../ChatOutput'

const actions = {
  onClickContent: action('clicked content'),
  onClickAuthor: action('clicked author')
}

const defaultProps = {
  messages: [{
    content: 'Connected!'
  }, {
    content: '166.24.xx.xx connected'
  }, {
    author: 'WOWF',
    content: <p>Welcome to the World of Wanders and Fables (aka WOWF) click <a href="http://wolfwares.ca-dstory">http://wolfwares.ca-dstory</a> for live map, chr sheet, livestream, etc.. all the goodies!</p>
  }, {
    author: 'Neon',
    content: "I've automatically logged into RXP"
  }, {
    author: 'Neon',
    content: "Isn't that cool?"
  }]
}

storiesOf('Components/ChatOutput', module)
.addDecorator(withKnobs)

.add('default', () => {
  const showAuthor = boolean('showAuthor?', false)
  const props = {
    ...actions,
    ...defaultProps,
    showAuthor
  }

  return <ChatOutput {...props} />
})

.add('messages types', () => {
  const props = {
    ...actions,
    showAuthor: true,
    messages: [{
      type: 'system',
      content: 'Connected!',
    }, {
      type: 'GM',
      author: 'WOWF',
      content: 'Hello, this is your GM speaking.',
      playerColorId: 0,
    }, {
      author: 'player1',
      content: 'Hello, this is Bobby speaking...',
      playerColorId: 1,
    }, {
      author: 'player2',
      content: 'Hello, this is Jane speaking...',
      playerColorId: 2,
    }, {
      author: 'player3',
      content: 'rolled 9', // WIP display .result instead, and remove .content
      result: 9,
      dice: [{type: 'd4', qty: 1, mod: 2, total: 3}, {type: 'd8', qty: 1, total: 6}],
      type: 'roll',
      playerColorId: 3,
    }, {
      author: 'player1',
      content: 'rolled 35', // WIP display .result instead, and remove .content
      result: 35,
      dice: [{type: 'd6', qty: 8, mod: 8, total: 35}],
      type: 'roll',
      playerColorId: 1,
    }, {
      author: 'player1',
      content: 'Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking...  Hello, this is Bobby speaking... Hello, this is Bobby speaking...',
      playerColorId: 1,
    }, {
      type: 'system',
      content: 'Connected to WOWF as Player3',
    }, {
      type: 'system',
      content: 'Welcome Player4 (123.123.123.123 connected)'
    }, {
      type: 'whisper',
      author: 'Storybook',
      dest: 'player-123',
      content: 'Hello "player-123", only you and I can read this.',
    }, {
      type: 'whisper',
      author: 'Storybook',
      dest: 'player-234',
      content: 'Hello "player-234", only you and I can read this.',
    }, {
      type: 'whisper',
      author: 'Storybook',
      dest: 'player-XXX',
      content: 'Hello "player-XXX", only you and I can read this.',
    }]
  }

  return <ChatOutput {...props} />
})
