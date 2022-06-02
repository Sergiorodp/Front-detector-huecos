import axios from 'axios'
import helpers from 'backendservice/helpers'
import { headers } from 'next.config'

const auth = (token) =>{
    return {
        headers: { Authorization: `Bearer ${token}`}
    }
}

const getDetectionsUser = ( state ) => {

    let tempTkn = 0 

    if( state.isUser ){
        tempTkn = state.data.token 
    }

    return axios.get(`${helpers.baseUrl}/deteccion/getByUser/${state.data.user?.id ?? 0}`,
        auth(tempTkn)
    )
    .catch( err => console.log(err))

}

export default {
    getDetectionsUser
}
