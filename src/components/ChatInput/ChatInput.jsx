import React from 'react'
import Box, { Button, Input } from '../../theme'

const InputField = props => <Input {...props} />
const SendButton = props => <Button {...props}>send</Button>

class ChatInput extends React.Component {
  state = {
    message: '',
  }

  sendMessage () {
    const { message } = this.state
    const { sendMessage, onSend, clearOnSend } = this.props

    sendMessage(message)
    onSend(message)
    if ( clearOnSend ) this.setState({message: ''})
  }

  render () {
    const { message } = this.state
    const inputProps = { 
      value: message,
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
          this.sendMessage()
        }
      }
    }

    const buttonProps = { 
      onClick: () => {
        if ( !message.length ) return;
        this.sendMessage()
      }
    }

    return <Box>
      <InputField {...inputProps} />
      <SendButton {...buttonProps} />
    </Box>
  }
}

ChatInput.defaultProps = {
  onChange: f => f,
  onKeyPress: f => f,
  onSend: f => f,
  sendMessage: f => f,
  sendOnEnter: true,
  clearOnSend: true,
  onHistoryPrevious: f => f,
  onHistoryNext: f => f,
}

export default ChatInput
