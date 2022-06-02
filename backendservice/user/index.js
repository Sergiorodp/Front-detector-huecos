import axios from 'axios'
import helpers from 'backendservice/helpers'
// const axios = require('axios')

const baseUrlService = `${helpers.baseUrl}/users`

const config = (token) => {
    return {headers: { Authorization: `Bearer ${token}` }}
};

const getUser = () => {
    return axios.get(baseUrlService)
    .then( res => res.data)
}

const LoginService = user => {

    return axios.post(`${baseUrlService}/login`, user)

}

const RegisterService = user =>{

    return axios.post(`${baseUrlService}/register`, user)

}

export const GetByTkn = token => {

    return axios.get(`${baseUrlService}/get/bytkn?token=${token}`)
    
}

export const isValidTkn = token => {
    return axios.get(`${baseUrlService}/isValidToken`,
    config(token) 
    )
}
 

// logIn({
//     email : "sergi@jojojo.com",
//     password : "137273hwjhjs"
// })

export default { 
    LoginService,
    getUser,
    RegisterService,
    GetByTkn,
    isValidTkn
}
