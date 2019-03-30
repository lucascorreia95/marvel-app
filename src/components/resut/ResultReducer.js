const INITIAL_STATE = {
    result: {},
    item: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESULT_FETCHED':
            return { ...state, result: action.payload }
        case 'CHOOSE_ITEM':
            return { ...state, item: action.payload }
        case 'CHOOSE_CHARACTER':
            return { ...state, item: action.payload }
        case 'CHOOSE_COMIC':
            return { ...state, item: action.payload }
        default:
            return state
    }
}