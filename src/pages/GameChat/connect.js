import { connect } from 'react-redux'

const mapStateToProps = state => ({
  messages: state.messagesHistory
})

const mapDispatchToProps = dispatch => ({
  sendMessage: f => f,
})

export default connect(mapStateToProps, mapDispatchToProps)
