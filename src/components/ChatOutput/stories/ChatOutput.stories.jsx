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
