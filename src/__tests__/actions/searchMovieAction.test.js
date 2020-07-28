import C from '../../constants/constants'
import * as actions  from '../../actions/searchActions'

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('actions', () => {
    it('should create an action to search for a movie', () => {
        const text = 'what we do in the shadows'
        const expectedAction = {
            type: C.SEARCH_MOVIE,
            payload : text
        }
        const store = mockStore({})
        store.dispatch(actions.searchMovie('what we do in the shadows'))
        
        expect(store.getActions()[0])
            .toEqual(expectedAction)
        
    })
})