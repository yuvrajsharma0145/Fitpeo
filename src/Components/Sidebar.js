import React from 'react'
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Grid, Snackbar, TextField, Typography } from '@mui/material'
function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>

                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <LineStyleOutlinedIcon fontSize='large' />
                        </Grid>
                        <Grid>
                            <Typography variant='h5'>Dashboard</Typography>
                        </Grid>
                    </Grid>

                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <LineStyleOutlinedIcon />
                        </Grid>
                        <Grid>
                            <Typography variant='p'>Dashboard</Typography>
                        </Grid>
                    </Grid>
                </li>
                <li className='sidebar-list-item'>
                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <ProductionQuantityLimitsOutlinedIcon />
                        </Grid>
                        <Grid>
                            <Typography variant='p'>Products</Typography>
                        </Grid>
                    </Grid>
                </li>
                <li className='sidebar-list-item'>
                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <AccessibilityNewOutlinedIcon />
                        </Grid>
                        <Grid>
                            <Typography variant='p'>Customer</Typography>
                        </Grid>
                    </Grid>
                </li>
                <li className='sidebar-list-item'>
                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <CurrencyBitcoinOutlinedIcon />
                        </Grid>
                        <Grid>
                            <Typography variant='p'>Income</Typography>
                        </Grid>
                    </Grid>
                </li>
                <li className='sidebar-list-item'>
                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <LineStyleOutlinedIcon />
                        </Grid>
                        <Grid>
                            <Typography variant='p'>Promote</Typography>
                        </Grid>
                    </Grid>
                </li>
                <li className='sidebar-list-item'>
                    <Grid container columnGap={1} sx={{ margin: "0px", padding: "0px" }}>
                        <Grid item>
                            <HelpOutlineOutlinedIcon />
                        </Grid>
                        <Grid>
                            <Typography variant='p'>Help</Typography>
                        </Grid>
                    </Grid>
                </li>

            </ul>
            <Snackbar />
        </aside>
    )
}

export default Sidebar