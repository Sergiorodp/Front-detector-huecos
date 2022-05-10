
import axios from 'axios'
import helpers from 'backendservice/helpers'
// const axios = require('axios')

const getProducts = () => {
    return axios.get(`${helpers.baseUrl}/products`)
    .then( res => res.data)
}

const getLastProducts = ({ count }) => {
    return axios.get(`${helpers.baseUrl}/products?count=${count}`)
    .then(res =>  res.data)
}

const postProduct = newProduct => {
    return axios.post(`${helpers.baseUrl}/products`, newProduct)
    .then(res => res.data)
}

export default {
    getProducts,
    getLastProducts
}