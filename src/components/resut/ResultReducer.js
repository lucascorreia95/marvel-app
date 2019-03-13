const INITIAL_STATE = {
    result: {},
    single: '1009610'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESULT_FETCHED':
            return { ...state, result: action.payload }
        case 'CHOOSE_SINGLE':
            return { ...state, single: action.payload }
        default:
            return state
    }
}