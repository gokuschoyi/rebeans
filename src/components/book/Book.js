import React from 'react'
import './Book.css'
import { Box, Typography, Divider } from '@mui/material'
const Book = () => {
    return (
        <section className='sectionBook' id='book'>
            <Box className='book-container'>
                <Box className='about-content'>
                    <Box className='book-content'>
                        <Typography textAlign='flex-start' display='flex' variant='h4' pl={2}>BOOK YOUR</Typography>
                        <Typography textAlign='flex-start' display='flex' variant='h3' pl={2}>Favourite room</Typography>
                        <Typography textAlign='flex-start' display='flex' variant='h5' pl={2}>For Those Who Love The Best</Typography>
                    </Box>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Divider width='90%'></Divider>
            </Box>
        </section>
    )
}

export default Book