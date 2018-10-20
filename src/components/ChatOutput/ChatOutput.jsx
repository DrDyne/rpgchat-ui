import React from 'react'
import Box from '../../theme'

const ChatOutput = ({onClickAuthor, onClickContent, showAuthor, messages}) => (
  <Box>
  { messages.map(({author, content, ...message}, index) => (
    <Box key={`${index/*TODO use time instead*/}:${author}`}>
      {showAuthor && <Box onClick={() => onClickAuthor({author, content, ...message})}>{ author }</Box> }
      <Box onClick={() => onClickContent({author, content, ...message})}>
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
