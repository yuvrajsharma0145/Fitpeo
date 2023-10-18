import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'
import { Grid, TextField, Typography } from "@mui/material"

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
function Header({ OpenSidebar }) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                <Typography>
                    Hello Yuvraj
                </Typography>
            </div>
            <div className='header-right'>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>


                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        }
                        sx={{ backgroundColor: "white", borderRadius: "10px" }} />
                </Box>
            </div>
        </header>
    )
}

export default Header