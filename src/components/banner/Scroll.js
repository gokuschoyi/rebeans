import React, { useEffect, useRef } from 'react'
import { Box, Grid, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import './Banner.css'

//  video scrubbing based on requestanimationframe

const Scroll = (props) => {
    const { frameRate } = props
    const theme = useTheme()
    const videoRef = useRef(null);
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const videoUrlBasedOnScreenSize = () => {
        const videoLinks = {
            videoOne: {
                xl: "https://storage.googleapis.com/fernglade-banner-video/makki720pS.mp4", // 720x720
                largeScreenH: "https://storage.googleapis.com/fernglade-banner-video/makki960p.mp4", // 960x540
                mediumScreen: "https://storage.googleapis.com/fernglade-banner-video/makki704p.mp4", // 704x369
                smallScreenV: "https://storage.googleapis.com/fernglade-banner-video/makki960pV.mp4", // 540x960
            },
            videoTwo: {
                xl: "https://storage.googleapis.com/fernglade-banner-video/M720pSHQ.mp4",
                largeScreenH: "https://storage.googleapis.com/fernglade-banner-video/M960pHHD.mp4",
                mediumScreen: "https://storage.googleapis.com/fernglade-banner-video/M704p.mp4",
                smallScreenV: "https://storage.googleapis.com/fernglade-banner-video/M960pVHD.mp4",
            }
        }

        const screenWidth = window.innerWidth;
        let selectedUrl;

        if (screenWidth > 1500) {
            selectedUrl = videoLinks.videoOne.xl
        } else if (screenWidth > 1200 && screenWidth <= 1500) {
            selectedUrl = videoLinks.videoOne.largeScreenH;
        } else if (screenWidth > 600 && screenWidth < 1200) {
            selectedUrl = videoLinks.videoOne.mediumScreen;
        } else if (screenWidth < 600) {
            selectedUrl = videoLinks.videoOne.smallScreenV;
        }
        return selectedUrl
    }

    const getContentHeightForScroll = () => {
        // dynamically set the scroll duration based on the content height
        const landingPage = document.querySelector('.landing-page-container')
        const content = document.querySelector('.content')
        let LPHeight, contentHeight, totalHeight;
        LPHeight = landingPage.getBoundingClientRect().height;
        contentHeight = content.getBoundingClientRect().height;
        totalHeight = Math.round(LPHeight + contentHeight + 200);
        // console.log(LPHeight, contentHeight)
        return totalHeight
    }

    const loadedRef = useRef(false);
    useEffect(() => {
        if (!loadedRef.current) {
            loadedRef.current = true;
            let selectedUrl = videoUrlBasedOnScreenSize()
            let tHeight = getContentHeightForScroll()
            let offset = 0;
            let video = videoRef.current;
            video.src = selectedUrl;

            const smoothScroll = () => {
                offset += ((window.pageYOffset / tHeight) - offset) * 0.04;
                let fTime = parseFloat(((offset * 450) / frameRate).toFixed(3));
                video.currentTime = fTime;
                requestAnimationFrame(smoothScroll);
            }

            video.addEventListener('loadeddata', function () {
                console.log('video loaded')
                requestAnimationFrame(smoothScroll);
            })

            video.addEventListener('error', function (event) {
                // Handle error
                console.log('Video loading error:', event);
            }, false);

            return () => {
                video.removeEventListener('loadeddata', function () {
                    requestAnimationFrame(smoothScroll);
                })
                video.removeEventListener('error', function (event) {
                    // Handle error
                    console.log('Video loading error:', event);
                }, false);
            }
        }
    }, [frameRate])

    return (
        <Box className='video-container'
            style={{
                width: '100%',
                height: '100vh',
                position: 'fixed',
                backgroundColor: `${theme.palette.secondary.light}`
            }}
        >
            <Grid container sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={12} lg={11} xl={6}></Grid>
                <Grid className='video-grid-item' item xs={12} sm={12} md={12} lg={11} xl={6}>
                    <video
                        ref={videoRef}
                        src="https://storage.googleapis.com/fernglade-banner-video/makki960p.mp4"
                        muted
                        preload={sm ? 'auto' : 'metadata'}
                        className='video-scroll'
                        style={{ width: 'auto', objectFit: 'cover', }}
                    ></video>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Scroll