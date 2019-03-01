const INITIAL_STATE = {
    result: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESULT_FETCHED':
            return { ...state, result: action.payload }
        default:
            return state
    }
}