import React from 'react';
import {Grid,Typography} from '@mui/material'
import Chart from 'react-apexcharts';
const Cchart = () => {
    const options={
        series:[2,4,5],
    }
    const series=[2,4,5];
  return (
    <Grid xs={12} style={{height:`${window.innerHeight}`, marginTop:"10px"}}>
        <Grid item xs={12}>
            <Grid item xs={2}>
                <Grid item xs={8}>
                    <Chart
                   
                    series={series}
                    type='donut'
                    width="100%"
                    height={160}
                    />
                </Grid>
                
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Cchart;
