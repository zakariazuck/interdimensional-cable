import C from '../../constants/constants'
import  searchReducer  from '../../reducers/searchReducer'
import deepFreeze from 'deep-freeze'


describe("Reducer", () => {
    it("should handle SEARCH_MOVIE", () => {
        const state = {}
        const action = {
            type: C.SEARCH_MOVIE,
            payload: 'Greyhound test',
        }
        deepFreeze(state)
        deepFreeze(action)
        const results = searchReducer(state, action)
        expect(results)
            .toEqual({
                text: 'Greyhound test',
                loading: false
            })
    })
    it("should handle FETCH_MOVIES success", () => {
        const state = {}
        const action = {
            type: C.FETCH_MOVIES,
            payload: 'movies list',
        }
        deepFreeze(state)
        deepFreeze(action)
        const results = searchReducer(state, action)
        expect(results)
            .toEqual({
                movies: 'movies list',
                loading: false
            })
    })
    it("should handle LOADING success", () => {
        const state = {}
        const action = {
            type: C.LOADING
        }
        deepFreeze(state)
        deepFreeze(action)
        const results = searchReducer(state, action)
        expect(results)
            .toEqual({
                loading: true
            })
    })
})