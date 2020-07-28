import C from '../../constants/constants'
import * as actions  from '../../actions/searchActions'

import mockAxios  from 'axios';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
jest.mock('axios');

describe('actions', () => {
    it('should create an action to fetch movies', async () => {
        const response = { data :'what we do in the shadows search results'}
        const store = mockStore({})
        const text = 'what we do in the shadows'
        const expectedAction = {
            type: C.FETCH_MOVIES,
            payload : response.data
        }
  
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve(response)
        );
        
        await store.dispatch( actions.fetchMovies(text))
        expect(mockAxios.get)
            .toHaveBeenCalledTimes(1);
        expect(store.getActions()[0])
            .toEqual(expectedAction)
    })
})