import axios from 'axios'
const currentUrl = '/api/sensors/current'
const allUrl = '/api/sensors'


const getCurrent = () => {
  const request = axios.get(currentUrl)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(allUrl)
  
  return request.then(response => response.data)
}



export default { getCurrent, getAll }