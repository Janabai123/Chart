import React from 'react'
import {BarChart,XAxis,YAxis,Bar,Legend,Tooltip,CartesianGrid,ResponsiveContainer} from 'recharts';
function Chart() {
    const chartdata=[
        {subject:'x',fees: 100},
        { subject:'y', fees: 120},
        { subject:'z', fees: 50},

    ]

    
  return (
    <div>
    <h1>BarChart</h1>
       
        <ResponsiveContainer width="50%" aspect={1.5}>
       <BarChart data= {chartdata} margin={{left:25, right:25, top:25, bottom:25}}>
         <CartesianGrid strokeDasharray="2 2"/>
         <Tooltip />
         <Bar dataKey="fees" fill="red" />
         <XAxis dataKey ="subject"  interval="preserveStartEnd" tickFormatter={(value)=> value+" Subject"}/>
         <YAxis />
         <Legend />
       </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;