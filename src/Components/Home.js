import { Grid, Typography } from '@mui/material';
import React from 'react'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

import Cchart from './Cchart';
import Bchart from './Bchart';
function Home() {
    return (
        <main className='main-container'>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <Grid container>
                            <Grid item sx={{ backgroundColor: "lightgreen", borderRadius: "50px" }}><CurrencyExchangeOutlinedIcon sx={{ fontSize: 80, margin: "10px" }} /></Grid>
                            <Grid item sx={{ marginTop: "20px", marginLeft: "10px" }}>
                                <Typography variant='p'>Earning</Typography>
                                <Typography variant='h6'>$198K</Typography>
                                <Typography variant='p'>37.8% this month</Typography>
                            </Grid>
                        </Grid>
                    </div>

                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <Grid container>
                            <Grid item sx={{ backgroundColor: "violet", borderRadius: "50px" }}><ShoppingBagOutlinedIcon sx={{ fontSize: 80, margin: "10px" }} /></Grid>
                            <Grid item sx={{ marginTop: "20px", marginLeft: "10px" }}>
                                <Typography variant='p'>Orders</Typography>
                                <Typography variant='h6'>$2.4K</Typography>
                                <Typography variant='p'>2% this month</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <Grid container>
                            <Grid item sx={{ backgroundColor: "skyblue", borderRadius: "50px" }}><AccountBalanceWalletOutlinedIcon sx={{ fontSize: 80, margin: "10px" }} /></Grid>
                            <Grid item sx={{ marginTop: "20px", marginLeft: "10px" }}>
                                <Typography variant='p'>Balance</Typography>
                                <Typography variant='h6'>$2.4K</Typography>
                                <Typography variant='p'>2% this month</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <Grid container>
                            <Grid item sx={{ backgroundColor: "lightpink", borderRadius: "50px" }}><TrendingUpOutlinedIcon sx={{ fontSize: 80, margin: "10px" }} /></Grid>
                            <Grid item sx={{ marginTop: "20px", marginLeft: "10px" }}>
                                <Typography variant='p'>Total Sales</Typography>
                                <Typography variant='h6'>$89K</Typography>
                                <Typography variant='p'>11% this month</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <div className='charts'>
               <Grid item>
                <div>
                    <Bchart/>
                </div>
               </Grid>
               <Grid item>
                <div style={{backgroundColor:"white",display:"grid",borderRadius:"5px"}} className='two'>
                    <Typography>Customers</Typography>
                <Cchart/>
                </div >
               </Grid>
            </div>
        </main>
    )
}

export default Home