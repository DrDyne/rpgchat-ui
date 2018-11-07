import React from 'react'
import Box, { styled, colors } from '../../theme'

const ChatLogContent = styled.div`
  ${props => 
    props.messageType === 'system'
    ? `
      font-style: italic;
      font-weight: lighter;
      opacity: 0.5;
    `
    : null
  }
`

const ChatLogTime = styled.div`
  min-width: 70px;
  margin-right: 0.8em;
  color: ${props => colors.muted};
`

const ChatLogAuthor = styled.div`
  font-weight: bold;
  margin-right: 1em;
  color: ${props => colors.players[props.playerColorId]};
`

const ChatLogAuthorSeparator = styled.div`
  height: 20px;
  margin-right: 0.8em;
  margin-top: 5px;
  border-right: ${props => `${props.messageType === 'GM' ? `4px` : `1px`} solid ${colors.players[props.playerColorId] || colors.muted}`};
`

const ChatLogItem = styled(Box)`
  line-height: 30px;
  flex-direction: row;
`

const ChatLog = styled(Box)`
  flex-direction: column;
  background: ${colors.main};
  color: ${colors.active};
`

const ChatOutput = ({onClickAuthor, onClickContent, showAuthor, showTime, messages}) => (
  <ChatLog>
  { messages.map(({author, content, ...message}, index) => (
    <ChatLogItem key={`${index/*TODO use time instead*/}:${author}`}>
      { showTime && <ChatLogTime> { "21:05 PM" } </ChatLogTime> }
      { showAuthor && 
        <React.Fragment>
          <ChatLogAuthorSeparator messageType={message.type} playerColorId={message.playerColorId} />
          { !!author &&
            <ChatLogAuthor 
              playerColorId={message.playerColorId}
              messageType={message.type}
              onClick={() => onClickAuthor({author, content, ...message})}
            >{ author }</ChatLogAuthor> 
          }
        </React.Fragment>
      }
      <ChatLogContent 
        onClick={() => onClickContent({author, content, ...message})}
        messageType={message.type}
      >
        {content}
      </ChatLogContent>
    </ChatLogItem>
  ))}
  </ChatLog>
)

ChatOutput.defaultProps = {
  messages: [],
  showAuthor: false,
  showTime: true,
  onClickAuthor: f => f,
  onClickContent: f => f,
}

export default ChatOutput
