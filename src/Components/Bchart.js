import { Typography } from '@mui/material';
import React from 'react';
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from 'recharts'

const Bchart = () => {
    const Array = [
        {
            name: "Jan",
            value: 50,
        },
        {
            name: "Feb",
            value: 30,
        },
        {
            name:"Mar",
            value:70
        },
        {
            name:"Apr",
            value:60
        },
        {
            name:"May",
            value:65
        },
        {
            name:"June",
            value:20
        },
        {
            name:"July",
            value:65
        },
        {
            name:"Aug",
            value:70
        },
        {
            name:"Sept",
            value:63
        },
        {
            name:"Oct",
            value:58
        },
        {
            name:"Nov",
            value:55
        },
        {
            name:"Dec",
            value:61
        }
        
    ];
    return (
        <div style={{backgroundColor:"white", borderRadius:"5px",display:"grid"}} className='one'>
            <Typography variant='h6'>Overview</Typography>
            <Typography variant='p'>Monthaly Income</Typography>
            <ResponsiveContainer width="100%" aspect={4}>
                <BarChart data={Array}>
                    <XAxis dataKey="name"/>
                    <Bar dataKey="value" fill='violet'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Bchart;
