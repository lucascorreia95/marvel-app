const INITIAL_STATE = {
    single: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SINGLE_FETCHED':
            return { ...state, single: action.payload }
        default:
            return state
    }
}