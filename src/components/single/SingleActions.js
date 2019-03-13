import Api from '../../services/Api'

export const getSingle = async (route, id) => {
    
    console.log(route)
    
    console.log(id)

    const response = await Api.get('/single',{
        params: {
            id: id,
            route: route
        }
    })

    console.log(response)

    return{
        type: "test",
        payload: response
    }
}