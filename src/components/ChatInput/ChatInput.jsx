import React from 'react'
import Box, { Button, Input } from '../../theme'

const InputField = props => <Input {...props} />
const SendButton = props => <Button {...props}>send</Button>

class ChatInput extends React.Component {
  state = {
    message: '',
  }

  render () {
    const inputProps = { 
      onChange: event => {
        const {onChange} = this.props
        this.setState({message: event.target.value})
        onChange(event.target.value)
      },
      onKeyPress: event => {
        const { onKeyPress, sendMessage, onSend, sendOnEnter } = this.props
        onKeyPress(event)

        if ( 'Enter' === event.key ) {
          if ( !sendOnEnter ) return;
          sendMessage(this.state.message)
          onSend(this.state.message)
        }
      }
    }

    const buttonProps = { 
      onClick: () => {
        const { sendMessage } = this.props
        sendMessage(this.state.message)
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
}

export default ChatInput
