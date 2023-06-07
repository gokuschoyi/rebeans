import React, { useEffect } from 'react'
import './Banner.css'
import Pic from '../../Assets/main.jpg'
import { Box, Typography, useTheme } from '@mui/material'

// import VideoScroll from './NewVideoScroll'
import VideoScroll from './Scroll'

const Banner = () => {
    const theme = useTheme()
    useEffect(() => {
        const topSlider = document.getElementsByClassName('top-slider')
        const bottomSlider = document.getElementsByClassName('bottom-slider')
        const title = document.getElementsByClassName('title-main')
        const rebeansTitle = document.getElementsByClassName('rebeans-title-box')

        // Y value at which trailer switches to absolute positioning and scrolls up
        const threshold = window.innerHeight;

        window.addEventListener('scroll', function () {
            let translateY = window.scrollY / 2;
            let scrollY = window.scrollY;

            if (scrollY > (1.2 * threshold)) {
                topSlider[0].style.display = 'none';
                bottomSlider[0].style.display = 'none';
                title[0].style.display = 'none';
            }
            else {
                topSlider[0].style.display = 'block';
                bottomSlider[0].style.display = 'block';
                rebeansTitle[0].style.display = 'block';
                title[0].style.display = 'block';
                let opacity = Math.max(0, 100 - (scrollY * 0.2));
                topSlider[0].style.transform = `translateY(-${translateY}px)`;
                bottomSlider[0].style.transform = `translateY(${translateY}px)`;
                title[0].style.opacity = opacity / 100
            }

            if (scrollY > 100 && scrollY < (1.7 * threshold)) {
                if (scrollY > 1.2 * threshold) {
                    const opacity = 1 - ((scrollY - 1.2 * threshold) / (0.5 * threshold));
                    rebeansTitle[0].style.opacity = opacity > 0 ? opacity : 0;
                } else {
                    rebeansTitle[0].style.opacity = (translateY * 0.2) / 100;
                }
            } else {
                rebeansTitle[0].style.opacity = 0;
            }
        });
    })

    return (
        <Box className='banner-body'>
            <Box className='top-slider' style={{ transform: 'translateY()' }}>
                <Box className="hero__illustration">
                    <Box className='filler filler-white' style={{ position: 'fixed', top: '0' }}>
                        <img src={Pic} alt="Top Half" className="slider-image" />
                    </Box>
                </Box>
            </Box>

            <Box className='title-main'>
                <Typography variant='h1' className='title-font' style={{ transform: 'scale(1)', opacity: '1' }}>
                    "Escape to Tranquility" Unwind in Makki Mala's Hillside Retreat
                </Typography>
                <Box className="arrow animated"></Box>
            </Box>

            <Box className='rebeans-title-box' style={{ opacity: '0' }} sx={{ backgroundColor: `${theme.palette.background.default}` }}>
                <Typography variant='h1' color="secondary" className='rebeans-title' >Fernglade</Typography>
            </Box>

            <Box className='bottom-slider'>
                <Box className="hero__illustration">
                    <Box className='filler filler-white' style={{ position: 'fixed', bottom: '-7px' }}>
                        <img src={Pic} alt="Top Half" className="slider-image" />
                    </Box>
                </Box>
            </Box>

            <VideoScroll frameRate={30} />

        </Box>
    )
}

export default Banner