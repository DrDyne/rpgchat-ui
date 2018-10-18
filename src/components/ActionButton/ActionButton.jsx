import React from 'react'
import Box from '../../theme'

const ActionButton = ({onClick, command}) => (
  <Box onClick={onClick}>{ command.name }</Box>
)

ActionButton.defaultProps = {
  onClick: f => f,
  command: {
    name: 'N/A',
  }
}

export default ActionButton
