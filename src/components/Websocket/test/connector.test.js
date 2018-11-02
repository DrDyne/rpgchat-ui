import { mapDispatchToProps } from '../connector'
import { socketConnected } from '../../actions'

describe('mapDispatchToProps', () => {
  describe('creatSocket(url, options)', () => {
    it('should create a new Sockette instance and dispatch it to the store', () => {
      //WIP
      const dispatchMock = jest.fn()
      const someOptions = {}
      mapDispatchToProps(dispatchMock).createSocket('some-url', someOptions)
      expect(dispatchMock).toHaveBeenCalled()
    })
  })
})
