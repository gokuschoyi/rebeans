import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

ScrollMagicPluginGsap(ScrollMagic, gsap);

const NewVideoScroll = (props) => {
    const { frameRate } = props
    const videoRef = useRef(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        if (!loadedRef.current) {
            loadedRef.current = true;

            const largeScreen = "https://storage.cloud.google.com/fernglade-banner-video/output1.mp4"
            const mobile = "https://storage.cloud.google.com/fernglade-banner-video/makki720p.mp4"

            const screenWidth = window.innerWidth;
            let selectedUrl;

            if (screenWidth >= 1024) {
                selectedUrl = largeScreen;
            } else if (screenWidth <= 720) {
                selectedUrl = mobile;
            }

            videoRef.current.src = selectedUrl;

            const landingPage = document.querySelector('.landing-page-container')
            const content = document.querySelector('.content')
            let LPHeight, contentHeight;
            LPHeight = landingPage.getBoundingClientRect().height;
            contentHeight = content.getBoundingClientRect().height;
            let totalHeight = Math.round(LPHeight + contentHeight);
            console.log(LPHeight, contentHeight, totalHeight)

            let video = videoRef.current,
                frameNumber = 0;
            const videoScrollTL = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: '.video-scroll',
                    pin: true,
                    start: 'top top',
                    end: `${totalHeight}px`,

                    scrub: true,
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
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box className='video-container'
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#f8f9fa'
            }}
        >
            <video
                ref={videoRef}
                src="https://storage.cloud.google.com/fernglade-banner-video/output1.mp4"
                muted
                className='video-scroll'
                style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '10%' }}
            ></video>
        </Box>
    )
}

export default NewVideoScroll