import { connect } from 'react-redux'

const mapStateToProps = state => ({
  messages: state.messagesHistory
})

const mapDispatchToProps = dispatch => ({
  send: f => f,
})

export default connect(mapStateToProps, mapDispatchToProps)
