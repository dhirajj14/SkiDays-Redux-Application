import C from '../constants'

export const goal = (state, action) => {
    if(action.type === C.SET_GOAL){
        return parseInt(action.payload)
    }else{
        return state
    }
}

export const skiDay = (state=null, action) =>{
    if(action.type === C.ADD_DAY){
        return action.payload
    }else{
        return state
    }
}