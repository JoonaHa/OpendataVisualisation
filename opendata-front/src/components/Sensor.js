import React from 'react'
import 'react-vis/dist/style.css';
import {
  XYPlot, 
  VerticalBarSeries, 
  LabelSeries, 
  YAxis, 
  HorizontalGridLines,
  XAxis} 
  from 'react-vis';

const findmin = (data) => {
  return data.reduce(function(prev, curr) {
    return prev.y < curr.y ? prev : curr
  })
}

const findmax = (data) => {
  return data.reduce(function(prev, curr) {
    return prev.y > curr.y ? prev : curr
  })
}

const SensorsChart = ({ data , width , height}) => {

 

    return (
        <XYPlot 
          xType="ordinal"
          yType="linear"
          width={width} 
          height={height}>
          <HorizontalGridLines/>
          <XAxis/>
          <YAxis
            yDomain={[findmin(data).y, findmax(data).y+50]}
            y0={findmin(data).y}/>
          <VerticalBarSeries
              data={data}
          />
          <LabelSeries
            data={data.map(obj => {
              return { ...obj, label: Math.round(obj.y).toString() }
              })}
            labelAnchorX="middle"
                />
        </XYPlot>

    )
}

export default SensorsChart