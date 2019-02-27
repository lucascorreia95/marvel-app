const INITIAL_STATE = {
    inputValue: '',
    route: '',
    img: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'HANDLE_INPUT_CHANGE':
            return { ...state, inputValue: action.payload }
        case 'CHOOSE_CATEGORY':
            return { ...state, route: action.payload.route, img:action.payload.img }
        default:
            return state
    }
}