import C from '../../constants/constants'
import * as actions  from '../../actions/searchActions'

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('actions', () => {
    it('should create an action to search for a movie', () => {
        const expectedAction = {
            type: C.LOADING,
        }
        const store = mockStore({})
        store.dispatch(actions.setLoading())
        
        expect(store.getActions()[0])
            .toEqual(expectedAction)
        
    })
})