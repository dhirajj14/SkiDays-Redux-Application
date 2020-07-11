import C from './constants'
import storeFactory from './store'
// import initialState from './initialState.json'
import { createStore } from 'redux'

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}

const saveState = () => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)


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
    type: C.ADD_DAY,
    payload: {
        "resort" : "DJ Resort",
        "date" : "2020-07-10",
        "powder" : true,
        "backcountry" : false
    }
})


store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort" : "DJ Ski",
        "date" : "2020-07-11",
        "powder" : false,
        "backcountry" : true
    }
})

// let store = createStore(appReducer)

// //store.subscribe(() => console.log("Initial State", store.getState()))

// window.store = store

// const unsubscribeGoalLoagger = store.subscribe(() => {
//     console.log(`Goal: ${store.getState().goal}`)
// })




// setInterval(()=>{
//     store.dispatch({
//         type: C.SET_GOAL,
//         payload: Math.floor(Math.random() * 100)
//     })
// }, 250)

// setTimeout(()=> unsubscribeGoalLoagger, 3000)