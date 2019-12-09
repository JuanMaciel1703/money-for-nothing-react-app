const INITIAL_STATE = {
    error: null
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'GENERAL_ERROR':
            return { 
                ...state, 
                error: action.payload 
            }
        default:
            return state
    }
}