import React, { useEffect } from 'react'
import BannerVideo from '../../Assets/Banner_Video_Compressed.mp4';
import LandingSection from '../landingSection.component';
import Products from '../products.component';
import NewsLetter from '../newsLetter.component';
import ContactUs from '../contactUs.component';

import './mainBody.styles.css';

const MainBody = () => {

    useEffect(() => {

        const topSlider = document.getElementsByClassName('top-slider')
        const bottomSlider = document.getElementsByClassName('bottom-slider')
        const title = document.getElementsByClassName('titleMain')
        const rebeansTitle = document.getElementsByClassName('rebeans-title')
        // Y value at which trailer switches to absolute positioning and scrolls up
        const threshold = window.innerHeight;

        window.addEventListener('scroll', function () {
            let translateY = window.scrollY / 2;
            let scrollY = window.scrollY;
            let scale = 1 + window.scrollY / 50;
            let opacity = 100 - (window.scrollY * 0.5);
            /* console.log({ threshold, scrollY, translateY }); */
            topSlider[0].style.transform = `translateY(-${translateY}px)`;
            bottomSlider[0].style.transform = `translateY(${translateY}px)`;
            title[0].style.transform = `scale(${scale})`;
            title[0].style.opacity = opacity / 100
            /* rebeansTitle[0].style.transform = `scale(${scale})`; */


            if (window.scrollY > 2 * threshold) {
                topSlider[0].style.display = 'none';
                bottomSlider[0].style.display = 'none';
                rebeansTitle[0].style.display = 'none';
            }
            else {
                topSlider[0].style.display = 'block';
                bottomSlider[0].style.display = 'block';
                rebeansTitle[0].style.display = 'block';
            }

            if (window.scrollY > 100) {
                rebeansTitle[0].style.opacity = (translateY * 0.2) / 100;
            }
            else {
                rebeansTitle[0].style.opacity = 0
            }
        });
    })

    return (
        <>
            <div className='top-slider' style={{ transform: 'translateY()' }}>
                <div className="hero__illustration">
                    <div className='filler filler-white'>
                    </div>
                </div>
            </div>

            <h1 className='titleMain' style={{ position: 'fixed', transform: 'scale(1)', opacity: '1' }}>The Future Of Coffee BY</h1>
            <h2 className='rebeans-title' style={{ opacity: '0' }}>REBEANS</h2>
            <div className='bottom-slider'>
                <div className="hero__illustration">
                    <div className='filler filler-white'>
                    </div>
                </div>
            </div>
            <div className="trailer">
                <div className="video-wrapper">
                    <video playsInline autoPlay muted loop>
                        <source src={BannerVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}

export default MainBody