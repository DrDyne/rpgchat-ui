import React from 'react'
import { Button } from '../../theme'

const ActionButton = ({onClick, command}) => (
  <Button onClick={onClick}>{ command.name }</Button>
)

ActionButton.defaultProps = {
  onClick: f => f,
  command: {
    name: 'N/A',
  }
}

export default ActionButton
