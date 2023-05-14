import React, { useEffect } from 'react'
import BannerVideo from '../../Assets/Banner_Video_Compressed.mp4';
import './mainBody.styles.css';
import Pic from '../../Assets/main.jpg'
import Pic1 from '../../Assets/main2.jpg'

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

            console.log({ threshold, scrollY, translateY });
            /* rebeansTitle[0].style.transform = `scale(${scale})`; */

            if (scrollY > (2.2 * threshold)) {
                topSlider[0].style.display = 'none';
                bottomSlider[0].style.display = 'none';
                rebeansTitle[0].style.display = 'none';
            }
            else {
                topSlider[0].style.display = 'block';
                bottomSlider[0].style.display = 'block';
                rebeansTitle[0].style.display = 'block';
                let scale = 1 + scrollY / 140;
                let opacity = Math.max(0, 100 - (scrollY * 0.2));
                topSlider[0].style.transform = `translateY(-${translateY}px)`;
                bottomSlider[0].style.transform = `translateY(${translateY}px)`;
                title[0].style.transform = `scale(${scale})`;
                title[0].style.opacity = opacity / 100
            }

            if (scrollY > 100 && scrollY < (2 * threshold)) {
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
                    <div className='filler filler-white' style={{ position: 'fixed', top: '0' }}>
                        <img src={Pic} alt="Top Half" className="slider-image" />
                    </div>
                </div>
            </div>

            <div className='titleMain'>
                <h1 className='title-font' style={{ transform: 'scale(1)', opacity: '1' }}>"Escape to Tranquility" Unwind in Makki Mala's Hillside Retreat</h1>
            </div>
            <h2 className='rebeans-title' style={{ opacity: '0' }}>Fernglade</h2>

            <div className='bottom-slider'>
                <div className="hero__illustration">
                    <div className='filler filler-white' style={{ position: 'fixed', bottom: '0' }}>
                        <img src={Pic} alt="Top Half" className="slider-image" />
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