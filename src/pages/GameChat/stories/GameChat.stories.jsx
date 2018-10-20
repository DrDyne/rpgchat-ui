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
