import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

import Video from '../../Assets/makki30fps.mp4'

ScrollMagicPluginGsap(ScrollMagic, gsap);

const VideoPlayer = (props) => {
    const { frameRate } = props
    const intervalTime = parseFloat((1000 / frameRate).toFixed(2));
    const videoRef = useRef(null);
    const loadedRef = useRef(false);
    useEffect(() => {
        const videoElement = videoRef.current;
        let player
        videoElement.addEventListener('loadeddata', () => {
            console.log("video.js useEffect")
            if (!loadedRef.current) {
                loadedRef.current = true;
                // Initialize the Video.js player when the component mounts
                player = videojs(videoRef.current, {
                    userActions: {
                        doubleClick: false
                    }
                })
            }
        });

        // Clean up the Video.js player when the component unmounts
        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, []);

    useEffect(() => {
        console.log("scrollMagis useEffect")
        const start = document.getElementsByClassName('anitrig')[0];
        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            duration: 7000,
            triggerElement: start,
            triggerHook: 0,
        })
            .setPin(start)
            .addTo(controller);

        let acclAmount = 0.3;
        let scrollPos = 0;
        let delay = 0;

        scene.on("update", (e) => {
            scrollPos = parseFloat((e.scrollPos / 7000));
            // console.log({ scrollPos })
        });

        setInterval(() => {
            delay += (scrollPos - delay) * acclAmount;
            if (delay !== 0) {
                delay = parseFloat(delay.toFixed(6));
                let frameTime = Math.round(delay * 450)
                let videoTime = parseFloat((frameTime / frameRate).toFixed(6))
                if (videoTime !== videoRef.current.currentTime) {
                    // console.log({ frameTime, videoTime })
                    videoTime = videoTime.toFixed(6)
                    videoRef.current.currentTime = videoTime
                }
                // console.log({ frameTime, videoTime })
            }
        }, intervalTime);

        return () => {
            scene.destroy(true);
            controller.destroy(true);
        };
    })

    return (
        <div style={{ width: '100%', height: '100vh' }} className='anitrig'>
            <video
                ref={videoRef}
                src={Video}
                className='video-js'
                id="video-player"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
                type='video/mp4'
                preload='auto'
            />
        </div>
    );
};

export default VideoPlayer;