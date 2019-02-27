require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let TOKEN = process.env.TOKEN
let API_URL = process.env.API_URL


module.exports = {
  MONGODB_URI,
  PORT,
  TOKEN,
  API_URL
}