import C from './constants'
import { skiDay } from './store/reducers'

const state = null

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date" : "2020-07-07",
        "powder" : true,
        "backcountry" : false
    }
}
const nextState = skiDay(state, action)

console.log(`

    initial State: ${state}
    action: ${JSON.stringify(action)}
    new State: ${JSON.stringify(nextState)}

`)