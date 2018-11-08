import React from 'react'
import Box, { styled, colors } from '../../theme'

const ChatLogContent = styled.div`
  ${props => props.messageType === 'system' && `
    font-style: italic;
    font-weight: lighter;
    opacity: 0.5;
  `}

  ${props => props.messageType === 'roll' && `
    font-style: italic;
    color: ${colors.diceroll};
  `}
  }
`

const ChatLogTime = styled.div`
  min-width: 70px;
  margin-right: 0.8em;
  color: ${props => colors.muted};
`

const ChatLogAuthor = styled.div`
  font-weight: bold;
  margin-right: 0.8em;
`

const ChatLogWhisperTo = styled.div`
  font-weight: bold;
  margin-left: -0.8em;
  margin-right: 0.8em;
  &:before {
    content: "•";
    //content: "»";
    margin: 0 0.25em;
    color: #FF00FF;
  }
`

const ChatLogAuthorSeparator = styled.div`
  height: 20px;
  margin-right: 0.8em;
  margin-top: 5px;
`

const ChatLogAuthorBox = styled(Box)`
  opacity: 0.7;
  ${ChatLogAuthor} { color: ${props => colors.players[props.authorColorId]}; }
  ${ChatLogWhisperTo} { color: ${props => colors.players[props.whisperColorId]}; }

  ${ChatLogAuthorSeparator} {
    border-right: ${props => `${props.messageType === 'GM' ? `4px` : `1px`} solid ${colors.players[props.authorColorId] || colors.muted}`};
  }
`

const ChatLogItem = styled(Box)`
  line-height: 30px;
  flex-direction: row;
`

const ChatLog = styled(Box)`
  flex-direction: column;
  background: ${colors.main};
  color: ${colors.active};
  margin-right: 35px;
  flex-grow: 1;
`

const ChatOutput = ({onClickAuthor, onClickContent, onClickWhisperTo, showAuthor, showTime, messages}) => (
  <ChatLog>
    { messages.map(({author, content, type, ...message}, index) => (
      <ChatLogItem key={`${index/*TODO use time instead*/}:${author}`}>

        { showTime && <ChatLogTime>{ "21:05 PM" }</ChatLogTime> }

        { showAuthor && 
          <ChatLogAuthorBox messageType={type} authorColorId={message.authorColorId} whisperColorId={message.whisperColorId}>
            <ChatLogAuthorSeparator />
            { !!author &&
              <ChatLogAuthor onClick={() => onClickAuthor({author, content, type, ...message})}
              >{ author }</ChatLogAuthor> 
            }
            { 'whisper' === type && 
              <ChatLogWhisperTo onClick={() => onClickWhisperTo()}>
                { message.to }
              </ChatLogWhisperTo>
            }

          </ChatLogAuthorBox>
        }

        <ChatLogContent 
          onClick={() => onClickContent({author, content, ...message})}
          messageType={type}
        >{content}</ChatLogContent>

      </ChatLogItem>
    ))}
  </ChatLog>

)

ChatOutput.defaultProps = {
  messages: [],
  showAuthor: true,
  showTime: true,
  onClickAuthor: f => f,
  onClickContent: f => f,
  onCLickWhisperTo: f => f,
}

export default ChatOutput