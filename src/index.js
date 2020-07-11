import C from './constants'
import { suggestions, fetching } from './store/reducers'
import expect from 'expect'

const state = {
    fetching : true,
    suggestions: []
}

const expectedState = {
    fetching : false,
    suggestions: ["Heavenly Ski Resort", "Heavenly Sonohara"]
}

const action = {
    type : C.CHANGE_SUGGESTIONS,
    payload: ["Heavenly Ski Resort", "Heavenly Sonohara"]
}
const actualState = {
    fetching: fetching(state.fetching, action),
    suggestions: suggestions(state.suggestions, action)
}

expect(actualState.fetching).toEqual(expectedState.fetching);
expect(actualState.suggestions).toEqual(expectedState.suggestions);

console.log(`

    Fetching challenge passed!

`)