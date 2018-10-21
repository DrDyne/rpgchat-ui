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
    }, {
      type: 'player',
      author: 'player1',
      content: 'Hello, my character name is "player1", how does that sound?',
    }, {
      type: 'scene',
      content: 'The darkness around you grows heavier...',
    }, {
      type: 'whisper',
      author: 'player1',
      to: 'player2',
      content: "let's flank them, you go right and i take left!",
    }, {
      type: 'whisper',
      author: 'GM',
      to: 'player1',
      content: "Can you remind me about your STR stat?",
    }, {
      type: 'whisper',
      author: 'player1',
      to: 'GM',
      content: 'My STR score is 18, counting bonuses from my currently equipped weapon',
    }, {
      type: 'roll',
      author: 'player1',
      content: '[1d6 +4] + [1d12 +1] = 8',
      details: '[1d6 +4] + [1d12 +1] = [1+4] + [2+1] = 8',
    }, {
      type: 'roll',
      author: 'player2',
      content: '[2d6 +1] + [3d4] = 15',
      details: '[2d6 +1] + [3d4] = [3+2 +1] + [1+3+4+1] = 15'
    }]
  }

  return <ChatOutput {...props} />
})
