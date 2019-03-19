import Api from '../../services/Api'

export const getCharacters = async (route, id) => {

    const response = await Api.get('/single',{
        params: {
            id: id,
            route: route
        }
    })

    return{
        type: "CHARACTERS_FETCHED",
        payload: response.data
    }
}