import React from 'react'
import { Grid } from '@mui/material'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={2}>
                <Sidebar/>
            </Grid>
            <Grid size={10}>
                <Outlet/>
            </Grid>
            
        </Grid>
    )
}

export default Rootlayout


