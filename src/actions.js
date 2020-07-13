import C from './constants'
import fetch from 'isomorphic-fetch'


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

export const suggestResortNames = value => dispatch => {

   
        dispatch({
            type: C.FETCH_RESORT_NAMES
        })

        fetch('http://localhost:3333/resorts/' + value).then(response => response.json()).then(
            suggestions => {
                dispatch({
                    type: C.CHANGE_SUGGESTIONS,
                    payload: suggestions
                })
            }
        ).catch(error => {
            dispatch(
                addError(error.message)
            )

            dispatch({
                type: C.CANCEL_FETCHING
            })
        })
    }