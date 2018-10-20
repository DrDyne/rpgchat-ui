import React from 'react'
import Box from '../../theme'
import ChatInput from '../../components/ChatInput/ChatInput'
import ChatOutput from '../../components/ChatOutput/ChatOutput'

const GameChat = ({
  messages, 
  showAuthor, 
  onClickAuthor,
  onClickContent,
  onChange,
  onKeyPress,
  onSend,
}) => {
  const outputProps = {
    messages,
    showAuthor,
    onClickAuthor,
    onClickContent,
  }
  const inputProps = {
    onChange,
    onKeyPress,
    onSend,
  }

  return (
    <Box>
      <ChatOutput {...outputProps} />
      <ChatInput {...inputProps} />
    </Box>
  )
}

GameChat.defaultProps = {
  ...ChatInput.defaultProps,
  ...ChatOutput.defaultProps,
}

export default GameChat
