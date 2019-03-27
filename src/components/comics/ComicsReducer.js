const INITIAL_STATE = {
    comics: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'COMICS_FETCHED':
            return { ...state, comics: action.payload }
        default:
            return state
    }
}