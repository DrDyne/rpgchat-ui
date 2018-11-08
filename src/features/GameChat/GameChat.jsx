import React from 'react'
import ChatInput from '../../components/ChatInput/ChatInput'
import ChatOutput from '../../components/ChatOutput/ChatOutput'
import Box, { styled, colors } from '../../theme'

const InputSeparator = styled.div`
  position: fixed;
  bottom: 78px;
  left: 24px;
  right: 24px;
  border-top: 1px solid ${colors.main};
  box-shadow: 0 -1px 2px #000;
`

const InputWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

const GameChatBox = styled(Box)`
  margin-bottom: 116px;
`

const GameChat = ({
  messages, 
  showAuthor, 
  onClickAuthor,
  onClickContent,
  onChange,
  onKeyPress,
  onSend,
  send,
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
    send,
  }

  return (
    <GameChatBox>
      <ChatOutput {...outputProps} />
      <InputSeparator />
      <InputWrapper>
        <ChatInput {...inputProps} />
      </InputWrapper>
    </GameChatBox>
  )
}

GameChat.defaultProps = {
  ...ChatInput.defaultProps,
  ...ChatOutput.defaultProps,
}

export default GameChat
