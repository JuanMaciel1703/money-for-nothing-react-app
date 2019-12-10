import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api/'

const getData = (url, useBaseUrl = true) => {
    return axios.get(`${useBaseUrl ? BASE_URL : ''}${url}`)
}

export default getData 
