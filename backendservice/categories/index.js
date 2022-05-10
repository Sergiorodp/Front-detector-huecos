import axios from 'axios'
import helpers from 'backendservice/helpers'

const getCategories = () => {

    return axios.get(`${helpers.baseUrl}/categories`)
    .then(res => res.data)
    .catch( err => console.log(err))

}

export default { 
    getCategories 
} 