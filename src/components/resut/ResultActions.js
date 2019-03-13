import Api from '../../services/Api'

export const getResults = async (route, value, params) => {
    
    const response = await Api.get('/result',{
        params: {
            params: params,
            value: value,
            route: route
        }
    })

    return{
        type: "RESULT_FETCHED",
        payload: response.data.data
    }
}

export const chooseSingle = single => ({
    type: 'CHOOSE_SINGLE',
    payload: single
})