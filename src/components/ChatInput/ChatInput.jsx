import React from 'react'

const Input = props => <input {...props} />
const SendButton = props => <button {...props}>send</button>

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

    return <div>
      <Input {...inputProps} />
      <SendButton {...buttonProps} />
    </div>
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
