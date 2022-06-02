import axios from 'axios'
import helpers from 'backendservice/helpers'

const getHuecos = () => {

    return axios.get(`${helpers.baseUrl}/hueco`)
    .catch( err => console.log(err))

}

const getCountHuecos = () => {

    return axios.get(`${helpers.baseUrl}/hueco/count`)
    .catch( err => console.log(err))

}

export default { 
    getHuecos, 
    getCountHuecos
} 