const INITIAL_STATE = {
    inputValue: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'HANDLE_INPUT_CHANGE':
            return { ...state, inputValue: action.payload }
        default:
            return state
    }
}