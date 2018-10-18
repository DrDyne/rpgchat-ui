import React from 'react'
import Box from '../../theme'

const ChatOutput = ({onClickAuthor, onClickContent, showAuthor, messages}) => (
  <Box>
  { messages.map(({author, content, time}) => (
    <Box key={time}>
      {showAuthor && <Box onClick={onClickAuthor}>{ author }</Box> }
      <Box onClick={onClickContent}>
        {content}
      </Box>
    </Box>
  ))}
  </Box>
)

ChatOutput.defaultProps = {
  messages: [],
  showAuthor: false,
  onClickAuthor: f => f,
  onClickContent: f => f,
}

export default ChatOutput
