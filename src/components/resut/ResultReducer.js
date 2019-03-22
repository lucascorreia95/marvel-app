const INITIAL_STATE = {
    result: {},
    characters: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESULT_FETCHED':
            return { ...state, result: action.payload }
        case 'CHOOSE_CHARACTERS':
            return { ...state, characters: action.payload }
        default:
            return state
    }
}