import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActionButton from '../ActionButton'

const actions = {
  onClick: action('clicked action'),
}

const defaultProps = {
  command: {
    name: 'Sheet',
  }
}

storiesOf('Components/ActionButton', module)
.add('default', () => <ActionButton {...actions} {...defaultProps} />)
