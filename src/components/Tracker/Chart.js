import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({ data, query }) => {
    return (
        <LineChart
            width={700}
            height={400}
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 20 }}
        >
            <Line type='monotone' dataKey={query.case} stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='date' />
            <YAxis dataKey={query.case} />
            <Tooltip />
        </LineChart>
    );
};

export default Chart;
