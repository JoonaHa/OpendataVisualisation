const mongoose = require('mongoose')

const sensorSchema = mongoose.Schema({
  date: Date,
  sensor1: Number,
  sensor2: Number,
  sensor3: Number,
  sensor4: Number, 
})

const Sensor = mongoose.model('Sensor', sensorSchema)

module.exports = Sensor