import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({data}) => {
    // const data = [
    //     {name: '1', uv: 400, pv: 2400, amt: 2400}, 
    //     {name: '2', uv: 40, pv: 2000, amt: 2000},
    //     {name: '3', uv: 350, pv: 2200, amt: 2200},
    //     {name: '4', uv: 40, pv: 2000, amt: 2000},
    //     {name: '5', uv: 40, pv: 2000, amt: 2000},
    // ];
    console.log(data)
    return (
        <LineChart width={700} height={400} data={data} margin={{ top: 20, right: 0, bottom: 0, left: 0 }}>
            <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="date" />
            <YAxis dataKey="confirmed"/>
            <Tooltip />
        </LineChart>
    )
}

export default Chart;