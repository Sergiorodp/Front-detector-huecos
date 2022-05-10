import axios from 'axios'
import helpers from 'backendservice/helpers'
// const axios = require('axios')

const baseUrlService = `${helpers.baseUrl}/users`


// servicios

const getUser = () => {
    return axios.get(baseUrlService)
    .then( res => res.data)
}

const LoginService = user => {

    return axios.post(`${baseUrlService}/login`, user)
    .then(res => {
        const data = res.data
        helpers.setUser_const(data)
        console.log(data)
    })

}

const RegisterService = user =>{

    return axios.post(`${baseUrlService}/register`, user)
    .then(res => {
        const data = res.data
        helpers.setUser_const(data)
        console.log(data)
    })

}


// logIn({
//     email : "sergi@jojojo.com",
//     password : "137273hwjhjs"
// })

export default { 
    LoginService,
    getUser,
    RegisterService
}
