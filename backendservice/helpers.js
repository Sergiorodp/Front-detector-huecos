// const baseUrl = 'https://e-shop-family.herokuapp.com/api/v1'

const baseUrl = 'http://localhost:3001/DetectorHuecos/v1'

let userMain = null

/* set and get */
const setUser_const = user => {
    userMain = user
}

const getUser_const = () => {
    return userMain
}

export default { baseUrl, setUser_const, getUser_const }