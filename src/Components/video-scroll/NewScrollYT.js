import React, { useEffect, useRef } from 'react';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

ScrollMagicPluginGsap(ScrollMagic, gsap);

const NewScrollYT = () => {
    const sequencerRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const intro = sequencerRef.current;
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

        scene.on('update', (e) => {
            scrollPos = e.scrollPos / 10000;
            // console.log({ scrollPos })
        });

        const animateImages = () => {
            // console.log(imagesRef.current.length)
            const index = Math.round(delay * (imagesRef.current.length - 1));
            if (index > imagesRef.current.length - 1) return;
            else {
                // console.log({ index })
                const currentImage = imagesRef.current[index];
                const sequencerImg = sequencerRef.current.querySelector('img');
                sequencerImg.src = currentImage.src;
            }
        };

        const animate = () => {
            delay += (scrollPos - delay) * acclAmount;
            animateImages();
            requestAnimationFrame(animate);
        };

        // Call animate function outside the interval
        requestAnimationFrame(animate);

        /* const intervalId = setInterval(() => {
            delay += (scrollPos - delay) * acclAmount;
            animateImages();
        }, 33.3); */

        return () => {
            // clearInterval(intervalId);
            scene.destroy(true);
            controller.destroy(true);
        };
    }, []);

    const preloadImages = async (path, count, ext) => {
        const paths = [];
        const images = imagesRef.current;

        if (path.substr(-1) === '/') {
            path = path.substr(0, path.length - 1);
        }

        for (let i = 1; i <= count; i++) {
            paths.push(`${path}${i}.${ext}`);
        }

        await Promise.all(
            paths.map((imgPath) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        resolve();
                    };
                    img.src = imgPath;
                    images.push(img);
                });
            })
        );
    };

    preloadImages('/frames/frame_', 360, 'jpg');

    return (
        <div className="intro" ref={sequencerRef}>
            <img className="sequencer" src="" alt="Sequence" />
        </div>
    );
};

export default NewScrollYT;
