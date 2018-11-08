import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/theme'

const req = require.context('../src/', true, /\.stories.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story =>
  <div>
    <GlobalStyle storybook={true} />
    {story()}
  </div>
)

configure(loadStories, module);
