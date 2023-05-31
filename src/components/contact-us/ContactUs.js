import React from 'react'
import './ContactUs.css'
import { Box, Typography, useTheme, TextField, Divider, Card, Button } from '@mui/material'
const ContactUs = () => {
    const theme = useTheme()
    return (
        <section className='sectionContactUs' id='contact' style={{ backdropFilter: 'blur(2px)' }}>
            <Box className='contact-us-container'>
                <Box className='about-content'>
                    <Box display='flex' justifyContent='flex-start'>
                        <Typography variant='h1' textAlign='start'>Contact Us</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center' className='contat-card'>
                        <Card sx={{ boxShadow: 10, backgroundColor: `${theme.palette.background.paper}`, opacity: '0.5' }} className='grid-card-right'>
                            <Box className='client-name-box-contact'>
                                <TextField
                                    size="small"
                                    name='firstName'
                                    id="outlined-firstname"
                                    label="First Name"
                                    variant="outlined"
                                    type='text'
                                />
                                <TextField
                                    size="small"
                                    name='lastName'
                                    id="outlined-username"
                                    label="Last Name"
                                    variant="outlined"
                                    type='text'
                                />
                            </Box>
                            <Box className='client-phone-box fullwidth'>
                                <TextField
                                    className='fullwidth'
                                    size="small"
                                    name='phoneNumber'
                                    id="outlined-lastname"
                                    label="Phone Number"
                                    variant="outlined"
                                    type='text'
                                />
                            </Box>
                            <Box className='client-subject fullwidth'>
                                <TextField
                                    className='fullwidth'
                                    size="small"
                                    name='subject'
                                    id="outlined-subject"
                                    label="Subject"
                                    variant="outlined"
                                    type='text'
                                />
                            </Box>
                            <Box className='client-email fullwidth'>
                                <TextField
                                    className='fullwidth'
                                    size="small"
                                    name='email'
                                    id="outlined-email"
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                />
                            </Box>
                            <Box className='client-message fullwidth'>
                                <TextField
                                    className='fullwidth'
                                    size="small"
                                    multiline={true}
                                    minRows='8'
                                    name='message'
                                    id="outlined-message"
                                    label="Message"
                                    variant="outlined"
                                    type='text'
                                />
                            </Box>
                            <Box className='submit-form'>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#000' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }} >Clear</Button>
                                <Button size="small" variant="text" style={{ color: `white`, backgroundColor: '#000' }} sx={{
                                    ':hover': {
                                        color: 'white !important',
                                        backgroundColor: '#f76e39 !important',
                                    },
                                }} >Submit</Button>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Divider width='90%'></Divider>
            </Box>
        </section>
    )
}

export default ContactUs