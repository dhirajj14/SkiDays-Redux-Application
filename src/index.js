import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`

    Initial State
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}

`)

state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2
})

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort" : "DJ Wood",
        "date" : "2020-07-09",
        "powder" : false,
        "backcountry" : true
    }
})

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ["D Wood", "DD Wood", "DP Wood"]
})


console.log(`

    Next State
    =============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}

`)