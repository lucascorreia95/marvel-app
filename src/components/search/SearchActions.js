export const handleInputChange = event => ({
    type: 'HANDLE_INPUT_CHANGE',
    payload: event.target.value
})

export const handleSubmit = e => {
    e.preventDefault();
    return{
        type: 'teste'
    }
}