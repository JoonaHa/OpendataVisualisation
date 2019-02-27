import React, { useState, useEffect, } from 'react'
import './App.css'
import sensorService from './services/sensors'
import Sensor from './components/Sensor'
import Sensors from './components/AllSensor'
const App = () => {
  const [currentSensor, setCurrentSensor] = useState([''])
  const [allSensors, setAllsensors] = useState([''])
  
  useEffect(() => {
    sensorService.getCurrent().then(ser =>
      setCurrentSensor( ser )
    )
      
  }, [])

  useEffect(() => {
    sensorService.getAll().then(sensors =>
      setAllsensors(sensors)

    )
  }, [])

  const data= [
    {
      y:Number(currentSensor.sensor1),
      x: 'sensor 1'
    },
    {
      y:Number(currentSensor.sensor2),
      x: 'sensor 2'
    },
    {
      y:Number(currentSensor.sensor3),
      x: 'sensor 3'
    },
    {
      y:Number(currentSensor.sensor4),
      x: 'sensor 4'
    }
  ]
 



  
  
    return (
     <div>
       <h1>Some sensor data:</h1>
       <div>
       <Sensor data={data} width={window.innerWidth/2.5} height={window.innerHeight/2}/>
     </div>
        <Sensors data={allSensors} width={window.innerWidth/1.2} height={window.innerHeight/2.3}/>
     </div>
    );
  }


export default App;
