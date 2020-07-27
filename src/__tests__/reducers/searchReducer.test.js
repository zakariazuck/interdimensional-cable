import C from '../../constants/constants'
import { searchReducer } from '../../reducers/searchReducer'

describe("search Reducer", () => {
    it("should handle SEARCH_MOVIE", () => {
        const state = {}
        const action = {
            type: C.SEARCH_MOVIE,
            text: 'Greyhound test',
            loading: false
        }
        const results = searchReducer(state, action)
        expect(results)
            .toEqual({
                text: 'Greyhound test',
                loading: false
            })
    })
    it("should handle FETCH_MOVIES success")
    it("should handle LOADING success")
})