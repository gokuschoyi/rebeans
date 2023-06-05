import React, { useEffect, useRef } from 'react'
import { Box, Grid, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

import gsap from "gsap";

const NewVideoScroll = (props) => {
    const { frameRate } = props
    const theme = useTheme()
    const videoRef = useRef(null);
    const loadedRef = useRef(false);
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const videoUrlBasedOnScreenSize = () => {
        const xl = "https://storage.googleapis.com/fernglade-banner-video/makki720pS.mp4" // 720x720
        const largeScreenH = "https://storage.googleapis.com/fernglade-banner-video/makki960p.mp4" // 960x540
        const mediumScreen = "https://storage.googleapis.com/fernglade-banner-video/makki704p.mp4" // 704x369
        const smallScreenV = "https://storage.googleapis.com/fernglade-banner-video/makki960pV.mp4" // 540x960

        const screenWidth = window.innerWidth;
        let selectedUrl;

        if (screenWidth > 1500) {
            selectedUrl = xl
        } else if (screenWidth > 1200 && screenWidth <= 1500) {
            selectedUrl = largeScreenH;
        } else if (screenWidth > 600 && screenWidth < 1200) {
            selectedUrl = mediumScreen;
        } else if (screenWidth < 600) {
            selectedUrl = smallScreenV;
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
        return totalHeight
    }

    useEffect(() => {
        if (!loadedRef.current) {
            loadedRef.current = true;

            let video = videoRef.current,
                frameNumber = 0;

            let selectedUrl = videoUrlBasedOnScreenSize()
            let totalHeight = getContentHeightForScroll()

            // console.log(selectedUrl, totalHeight)
            video.src = selectedUrl;

            const videoScrollTL = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: '.video-container',
                    pin: true,
                    start: 'top top',
                    end: `${totalHeight}`,
                    scrub: 2,
                    // markers: true,
                    onUpdate: self => {
                        frameNumber = parseFloat(((self.progress * 449) / frameRate).toFixed(6));
                        if (!isNaN(frameNumber)) {
                            // console.log(self.progress, frameNumber)
                            video.currentTime = frameNumber;
                        }
                    }
                }
            })

            video.addEventListener('loadeddata', function () {
                videoScrollTL.to({}, {})
            })

            video.addEventListener('error', function (event) {
                // Handle error
                console.log('Video loading error:', event);
            }, false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box className='video-container'
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: `${theme.palette.secondary.light}`
            }}
        >
            <Grid container sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={12} lg={11} xl={6}></Grid>
                <Grid className='video-grid-item' item xs={12} sm={12} md={12} lg={11} xl={6}>
                    <video
                        ref={videoRef}
                        src="https://storage.cloud.google.com/fernglade-banner-video/makki960pV.mp4"
                        muted
                        preload={sm ? 'auto' : 'metadata'}
                        className='video-scroll'
                        style={{ width: 'auto', objectFit: 'cover', }}
                    ></video>
                </Grid>
            </Grid>

        </Box >
    )
}

export default NewVideoScroll