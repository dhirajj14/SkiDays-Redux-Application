import C from './constants'
import { suggestions } from './store/reducers'


export function addDay(resort, date, powder = false, backcountry = false){
    return {
        type: C.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    }
}

export function removeDay(date){
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export function setGoal(goal){
    return {
        type: C.SET_GOAL,
        payload: goal
    }
}

export function addError(errorMsg){
    return {
        type: C.ADD_ERROR,
        payload: errorMsg
    }
}

export const clearError = index => {
    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}

export const changeSuggestions = suggestions => {
    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export const clearSuggestions = () => {
    return {
        type: C.CLEAR_SUGGESTIONS,
        
    }
}

export const randomGoal = () => (dispatch, getState) => {

    if(!getState().resortNames.fetching){
        dispatch({
            type: C.FETCH_RESORT_NAMES
        })
    
        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            })
        }, 1500);
    }
  
}