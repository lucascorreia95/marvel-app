const INITIAL_STATE = {
    result: {},
    item: '72744'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESULT_FETCHED':
            return { ...state, result: action.payload }
        case 'CHOOSE_ITEM':
            return { ...state, item: action.payload }
        default:
            return state
    }
}