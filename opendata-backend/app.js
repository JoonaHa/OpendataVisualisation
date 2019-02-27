const express = require('express')
const bodyParser = require('body-parser') 
const app = express()
const sensorService = require('./services/sensors')
const config = require('./utils/config')
const mongoose = require('mongoose')
const Sensor = require('./models/sensor')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
 
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/api/sensors/current', async (request, response) => {
   
    const sensor = await sensorService()
    const compare = new Sensor(sensor)
    const allSensors = await Sensor.find({})
   
    if( allSensors.filter(s => s.date.getTime() === compare.date.getTime()).length === 0) {
        await compare.save() 
        console.log('Saved to database')
    } else {
        console.log('Sensor data allready in db')
    }

    response.json(sensor)

})

app.get('/api/sensors/', async (request, response) => {
    const sensors = await Sensor.find({})

    
    
    response.json(sensors)

})




module.exports = app