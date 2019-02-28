const express = require('express')
const bodyParser = require('body-parser')
const cron = require("node-cron")
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

  //cron shelducer to pull new data everyhour 
  cron.schedule(" 1 */1 * * *", async function() {
    console.log('----------\n Cron job started')
    updateDailySensorData()
  });
 
app.use(bodyParser.json())
app.use(express.static('build'))


app.get('/api/sensors/current', async (request, response) => {
    const sensor = await sensorService()

    const compare = new Sensor(sensor)
    const allSensors = await Sensor.find({})
    const lenght = allSensors.filter(s => s.date.getTime() === compare.date.getTime()).length
    console.log(lenght)
    
    if ( lenght === 0) {
        await compare.save() 
        console.log('Saved to database')
    } else {
        console.log('Sensor data allready in db')
    }

    response.json(sensor)

})

app.get('/api/sensors/', async (request, response) => {
    const sensors = await Sensor.find({})
    const object = []
    
    sensors.forEach( s =>
      object.push(new Sensor(s))
     )

     console.log(object.length)

      const date = new Date()
      const yesterday = new Date()
      yesterday.setDate(date.getDate() - 1)
     const old = object.filter(s => !(s.date.getDate() === date.getDate() 
       || s.date.getDate() === yesterday.getDate() && s.date.getHours() >= date.getHours()))
      console.log('Old lenght: ', old.length)
      
      old.map( async (sens) => {
        const  content = await Sensor.findByIdAndRemove(sens._id)
        console.log('Removed: ', content)
      })

    
    
    response.json(sensors)

})
// removes over 24h old sensordata from db and updates the current sensors
const updateDailySensorData = async () => {
  const sensor = await sensorService()

  const compare = new Sensor(sensor)
  const allSensors = await Sensor.find({})
  const lenght = allSensors.filter(s => s.date.getTime() === compare.date.getTime()).length
  console.log(lenght)
  
  if ( lenght === 0) {
      await compare.save() 
      console.log('Saved to database')
  } else {
      console.log('Sensor data allready in db')
  }

  const sensors = await Sensor.find({})
  const object = []

   
  sensors.forEach( s =>
    object.push(new Sensor(s))
  )

  console.log(object.length)

  const date = new Date()
  const yesterday = new Date()
  yesterday.setDate(date.getDate() - 1)
  
  const old = object.filter(s => !(s.date.getDate() === date.getDate() 
      || s.date.getDate() === yesterday.getDate() && s.date.getHours() >= date.getHours()))
  
  console.log('Old lenght: ', old.length)
     
  old.map( async (sens) => {
    const  content = await Sensor.findByIdAndRemove(sens._id)
    console.log('Removed: ', content)
     })

}




module.exports = app