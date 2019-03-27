import Api from '../../services/Api'

export const getComics = async (route, id) => {

    const response = await Api.get('/single',{
        params: {
            id: id,
            route: route
        }
    })

    return{
        type: "COMICS_FETCHED",
        payload: response.data
    }
}