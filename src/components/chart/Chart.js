import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    
const data = [
    {
      name: 'Jan',
      max: 4000,
      min: 2400,
      avg: 2400,
    },
    {
      name: 'Feb',
      max: 3000,
      min: 1398,
      avg: 2210,
    },
    {
      name: 'Mar',
      min: 2000,
      max: 9800,
      avg: 2290,
    },
    {
      name: 'Apr',
      min: 2780,
      max: 3908,
      avg: 2000,
    },
    {
      name: 'May',
      min: 1890,
      max: 4800,
      avg: 2181,
    },
    {
      name: 'June',
      min: 2390,
      max: 3800,
      avg: 2500,
    },
    {
      name: 'July',
      min: 3490,
      max: 4300,
      avg: 2100,
    },
    {
      name: 'Aug',
      min: 3490,
      max: 4300,
      avg: 2100,
    },
    {
      name: 'Sep',
      min: 3490,
      max: 4300,
      avg: 2100,
    },
    {
      name: 'Oct',
      min: 3490,
      max: 4300,
      avg: 2100,
    },
    {
      name: 'Nov',
      min: 3490,
      max: 4300,
      avg: 2100,
    },
    {
      name: 'Dec',
      max: 3490,
      max: 4300,
      avg: 2100,
    },
  ];
  return (
    <div className='flex-[4] shadow-xl shadow-[rgba(201,201,201,0.47)]   text-gray-400 '>
        <div className="titile text-gray-600 mb-[20px]">Last Year Revenue</div>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} ascept={2/1}  data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colormax" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colormin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray' />


  <CartesianGrid strokeDasharray="1 1" style={{"stroke":"rgb(228,225,225)"}} />
  <Tooltip />
  <Area type="monotone" dataKey="max" stroke="#8884d8" fillOpacity={1} fill="url(#colormax)" />
  <Area type="monotone" dataKey="min" stroke="#82ca9d" fillOpacity={1} fill="url(#colormin)" />
</AreaChart>


        </ResponsiveContainer>
    </div>
  )
}

export default Chart