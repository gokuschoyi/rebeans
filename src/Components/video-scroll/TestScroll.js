import React, { useEffect, useRef } from "react";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

import Video from "../../Assets/zoom10.mp4";

ScrollMagicPluginGsap(ScrollMagic, gsap);

const TestScroll = () => {
    const vidRef = useRef(null);
    const delayRef = useRef(0);

    useEffect(() => {
        console.log("useEffect")
        const intro = vidRef.current;
        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            duration: 10000,
            triggerElement: intro,
            triggerHook: 0,
        })
            .setPin(intro)
            .addTo(controller);

        let acclAmount = 0.2;
        let scrollPos = 0;
        let delay = 0;

        scene.on("update", (e) => {
            scrollPos = e.scrollPos / 10000;
            // console.log({ scrollPos })
        });

        let frameRate = 24;
        let frameCount;
        let frameTimesArray = [];

        //set frmae times for the video
        const setFrameTimes = (frameCount, frameRate) => {
            const timeStamps = [];
            for (let i = 0; i <= frameCount; i++) {
                const currentTime = (i / frameRate).toFixed(6);
                timeStamps.push(parseFloat(currentTime));
            }
            return timeStamps;
        };

        // Check if Video is loaded and call animate function
        const video = vidRef.current.querySelector("video");
        video.addEventListener("loadeddata", () => {
            frameCount = video.duration * frameRate;
            frameTimesArray = setFrameTimes(frameCount, frameRate);
        });

        let previousFrame = -1;

        setInterval(() => {
            delay += (scrollPos - delay) * acclAmount;
            if (delay !== 0) {
                delayRef.current = delay;
            }
            // console.log("scroll pos", scrollPos)
            // console.log("let delay",delay)
            // console.log("ref delay",delayRef.current)

            const currentFrame = Math.round(delay * frameCount);
            const seconds = frameTimesArray[currentFrame];
            if (currentFrame !== previousFrame && currentFrame <= frameCount) {
                previousFrame = currentFrame;
                console.log({ currentFrame, seconds });
                video.currentTime = seconds;
            }
        }, 33.33);

        return () => {
            scene.destroy(true);
            controller.destroy(true);
        };
    }, []);

    return (
        <div ref={vidRef} className="intro-vid">
            <video src={Video} type='video/mp4' preload='auto' />
        </div>
    );
};

export default TestScroll;
