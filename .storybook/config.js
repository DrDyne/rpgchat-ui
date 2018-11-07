import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/theme'

const req = require.context('../src/', true, /\.stories.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story =>
  <div>
    <GlobalStyle />
    {story()}
  </div>
)

configure(loadStories, module);
