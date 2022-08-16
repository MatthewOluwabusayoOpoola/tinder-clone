import axios from "axios"

const instance = axios.create({
    baseURL: 'https://tinder0clone0backend.herokuapp.com'
})

export default instance;