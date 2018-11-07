import React from 'react'
import Box, { styled, colors, Button, Input } from '../../theme'

const ChatInputBox = styled(Box)`
  background: ${colors.secondary};
  width: 100%;
`

const InputField = styled(Input)`
  display: flex;
  flex-grow: 1;
  font-size: 36px;
  border: none;
  height: 78px;
  padding: 22px 19px;
  background: transparent;
`

class ChatInput extends React.Component {
  state = {
    message: '',
  }

  parseCommand(message) {
    // available command types:
    // roll: "!roll 1d4"  "!roll 1d4+1 1d6+2" "!!roll 1d4+1"
    // whisper: "@playername whisper something." 
    // say: "everybody can hear me"
    const isCommand = !!message.match(/^(!?[!@#]\w+)(.*)/) 
    if ( !isCommand ) return null

    const [command, content] = message.match(/^(!?[!@#]\w+)(.*)/) 

    if ( '!roll' === command ) { // dice roll "!roll 1d4 2d4+2"
      const die = message.match(/\d+d\d+(\+\d+)?/g)
      return { ...message, type: 'roll', die, }
    }

    if ( /^@\w+/.test(command) ) { // whisper "@player2 hello player2."
      const [to,] = message.match(/^@\w+/)
      return { ...message, type: 'whisper', to, }
    }

    //TODO admin commands
    //if ( '/slap' === command ) ...

    return { ...message, type: 'local' }
  }

  send () {
    const { message } = this.state
    const { send, onSend, clearOnSend } = this.props
    //const command = this.parseCommand(message) // TODO no command parsing for now, just chat
    console.log(message)

    send(message)
    onSend(message)
    if ( clearOnSend ) this.setState({message: ''})
  }

  render () {
    const { message } = this.state
    const { defaultValue } = this.props

    const inputProps = { 
      value: message,
      defaultValue,
      onChange: event => {
        const {onChange} = this.props
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
          if ( !sendOnEnter ) return;
          if ( !message.length ) return;
          this.send()
        }
      }
    }

    return <ChatInputBox>
      <InputField {...inputProps} />
    </ChatInputBox>
  }
}

ChatInput.defaultProps = {
  onChange: f => f,
  onKeyPress: f => f,
  onSend: f => f,
  send: f => f,
  sendOnEnter: true,
  clearOnSend: true,
  onHistoryPrevious: f => f,
  onHistoryNext: f => f,
  defaultValue: 'Talk in #local',
}

export default ChatInput
