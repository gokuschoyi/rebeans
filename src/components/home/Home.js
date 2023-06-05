import React from 'react'
import './Home.css'

import { Box, Typography, Button, Grid, Divider } from '@mui/material'
const Home = () => {
    const dimensions = { width: window.innerWidth, height: window.innerHeight }

    return (
        <section className='sectionHome' id='home' style={{ backdropFilter: 'blur(2px)'}}>
            <Box className='home-container'>
                <Box className='about-content'>
                    <Grid container spacing={2} className='home-container-grid'>
                        <Grid item xs={12} sm={6}>
                            <Box className='left-grid' >
                                <Typography variant='h5' >width : {dimensions.width}, height: {dimensions.height}</Typography>
                                <Typography variant='h5' >Fernglade Homes</Typography>
                                <Typography variant='h5' >Welcomes you to</Typography>
                                <Typography variant='h3'>"Hillside Haven"</Typography>
                                <Typography variant='h5' >Unwind in the lap of scenic bliss.</Typography>
                                <Box pt={6}>
                                    <Button variant='contained' className='btn btn-white'>BOOK A ROOM</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className='left-grid' >
                                <Typography variant='h5' >Coffee By</Typography>
                                <Typography variant='h3'>Rebeans</Typography>
                                <Typography variant='h5' >For Those Who Love The Best</Typography>
                                <Box pt={6}>
                                    <Button variant='contained' className='btn btn-white'>EXPLORE OUR PRODUCTS</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Divider width='90%'></Divider>
            </Box>
        </section>
    )
}

export default Home