import React from 'react'
import Box, { styled, colors, Button, Input } from '../../theme'
//import { parseCommand } from './chat-commands'

const ActivityTrackerBox = styled(Box)`
  color: ${colors.active};
  justify-content: space-between;
  padding: .5em 24px;
  background: rgba(57, 59, 65, 0.3); // TODO colors.main with opacity 30%
  margin-bottom: 4px;
`

const ActivityTracker = styled(Box)`
`
const CurrentTime = styled(Box)`
`

const InputFieldBox = styled(Box)`
  width: 100%;
  height: 78px;
`

const InputField = styled.textarea`
  resize: none;
  overflow: hidden;
  &:focus { outline: none; }

  color: ${colors.active};
  display: flex;
  flex-grow: 1;
  font-size: 28px;
  border: none;
  padding: 22px 19px 22px 0;
  background: transparent;
  ${props => props.isEmpty && `opacity: 0.4;`}
`

const Dot = styled.div`
  display: flex;
  align-self: center;
  height: 8px;
  width: 8px;
  margin: 0 20px;
  border-radius: 8px;
  background: ${props => props.isActive ? '#808185' : 'red'};
`

class ChatInput extends React.Component {
  state = {
    mode: 'text', // text, dice, whisper
    message: undefined,
    whisperTo: null,
  }

  input = null

  send (event) {
    const { message, whisperTo, mode } = this.state
    const { send, onSend, clearOnSend } = this.props
    //const command = this.parseCommand(message) // TODO no command parsing for now, just chat
    //console.log(message)

    if ( 'text' === mode )
      send({content: message})
    if ( 'whisper' === mode )
      send({content: message, to: whisperTo})
    //if ( 'dice' === mode ) return;

    onSend(message)
    if ( clearOnSend ) {
      this.setState({message: undefined})
      this.input.value = null
      event.preventDefault()
    }
  }

  onClickWhisperName () {
    this.setState({whisperTo: null, mode: 'text'})
  }

  render () {
    const { message } = this.state
    const { placeholder, currentTime, activity } = this.props

    const inputProps = { 
      ref: el => this.input = el,
      value: message,
      placeholder,
      isEmpty: !message || message.length === 0,
      onChange: event => {
        const { onChange } = this.props
        this.setState({message: event.target.value})
        onChange(event.target.value)
      },
      onKeyDown: event => {
        const { onHistoryPrevious, onHistoryNext } = this.props
        const { message } = this.state
        if ( 'ArrowUp' === event.key ) onHistoryPrevious(message)
        if ( 'ArrowDown' === event.key ) onHistoryNext(message)
      },
      onKeyPress: event => {
        const { onKeyPress, sendOnEnter } = this.props
        onKeyPress(event)

        if ( 'Enter' === event.key ) {
          if ( event.shiftKey ) return;
          if ( !sendOnEnter ) return;
          if ( !message.length ) return;
          this.send(event)
        }
      }
    }
    //console.log(inputProps)

    return (
      <React.Fragment>
        <ActivityTrackerBox>
          <ActivityTracker>{ activity }</ActivityTracker>
          <CurrentTime>{ currentTime }</CurrentTime>
        </ActivityTrackerBox>
        <Box style={{background: colors.main}}>
          <Dot isActive={'text' === this.state.mode}/>
          <InputFieldBox>
            <InputField {...inputProps} />
          </InputFieldBox>
        </Box>
      </React.Fragment>
    )
  }
}

ChatInput.defaultProps = {
  onChange: f => f,
  onKeyPress: f => f,
  onSend: f => f,
  send: f => f,
  sendOnEnter: true,
  clearOnSend: true,
  onHistoryNext: f => f,
  onHistoryPrevious: f => f,
  placeholder: 'Talk in #local',
  activity: 'Player1, GM are writing something...',
  currentTime: '22:06 PM',
}

export default ChatInput
