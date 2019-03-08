import Api from '../../services/Api'

export const getResults = async (route, value) => {
    
    const response = await Api.get(`${route}`)

    return{
        type: "RESULT_FETCHED",
        payload: response.data.data
    }
}