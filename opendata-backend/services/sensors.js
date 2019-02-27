const axios = require('axios')
const config = require('../utils/config')

const AuthStr = 'Bearer '.concat(config.TOKEN)
const baseUrl = config.API_URL

const getCurrent = async () => {
  const rs = await  axios.get(baseUrl, { headers: { Authorization: AuthStr} })
    
        console.log(rs.data)
        return rs.data


}

module.exports = getCurrent