import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { createStore } from 'redux'

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}
let store = createStore(appReducer)

store.subscribe(() => console.log("Initial State", store.getState()))

window.store = store

store.subscribe(() => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
})


store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort" : "DJ Wood",
        "date" : "2020-07-09",
        "powder" : false,
        "backcountry" : true
    }
})

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})