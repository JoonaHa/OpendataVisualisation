import React from 'react'
import {
    XYPlot, 
    YAxis, 
    DiscreteColorLegend,
    LineMarkSeries ,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis} 
    from 'react-vis';


    const sensor1 = (data) => {
    var values = []
    data.forEach(s => {
      var d= new Date(s.date) 
      values.push(
        {x: d.getHours(), y:s.sensor1}
        )
    });
    return values
  }

  const sensor2 = (data,key) => {
    var values = []
    data.forEach(s => {
      var d= new Date(s.date) 
      values.push(
        {x: d.getHours(), y:s.sensor2}
        )
    });
    return values
  }

  const sensor3 = (data,key) => {
    var values = []
    data.forEach(s => {
      var d= new Date(s.date) 
      values.push(
        {x: d.getHours(), y:s.sensor3}
        )
    });
    return values
  }

  const sensor4 = (data,key) => {
    var values = []
    data.forEach(s => {
      var d= new Date(s.date) 
      values.push(
        {x: d.getHours(), y:s.sensor4}
        )
    });
    return values
  }


const SensorLines = ({ data , width , height}) => {


    return(
        <div>
          <DiscreteColorLegend 
                items={
                    ['Sensor 1', 'Sensor 2', 'Sensor 3', 'Sensor 4']} 
                    orientation='horizontal'/>
          <XYPlot 
            width={width} 
            height={height} 
            yDomain={[-50, 300]}
            xType='linear'
            yType='linear'>
            <XAxis/><YAxis/>
            <HorizontalGridLines />
            <VerticalGridLines />
        
             <LineMarkSeries data={sensor1(data)} />  
             <LineMarkSeries data={sensor2(data)} /> 
             <LineMarkSeries data={sensor3(data)} /> 
             <LineMarkSeries data={sensor4(data)} />
          </XYPlot>;
        </div>
    )

}

export default SensorLines