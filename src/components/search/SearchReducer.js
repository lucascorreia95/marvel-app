const INITIAL_STATE = {
    inputValue: '',
    route: '',
    params: '',
    img: ''
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
        default:
            return state
    }
}