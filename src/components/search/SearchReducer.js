const INITIAL_STATE = {
    inputValue: '',
    route: '',
    params: '',
    img: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'HANDLE_INPUT_CHANGE':
            return { ...state, inputValue: action.payload }
        case 'CHOOSE_CATEGORY':
            return { ...state, route: action.payload.route, params: action.payload.params, img:action.payload.img }
        case 'CHOOSE_CHARACTER':
            return { ...state, route: "characters" }
        case 'CHOOSE_COMIC':
            return { ...state, route: "comics" }
        case 'LOADING_STATE':
            return { ...state, loading: true }
        case 'CHARACTERS_FETCHED':
            return { ...state, loading: false }
        case 'COMICS_FETCHED':
            return { ...state, loading: false }
        case 'RESULT_FETCHED':
            return { ...state, loading: false }
        default:
            return state
    }
}