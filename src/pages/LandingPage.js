import React, { useEffect, useRef } from 'react'
import { Box, useTheme, Grid } from '@mui/material'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Banner from '../components/banner/Banner'
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Product from '../components/product/Product'
import Book from '../components/book/Book'
import ContactUS from '../components/contact-us/ContactUs'

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const theme = useTheme()
    const contentStyles = {
        position: 'absolute',
        width: '100%',
        top: `${2.1 * window.innerHeight}px`,
        zIndex: '20'
    }

    const [scrolledIntoView, setScrolledIntoView] = React.useState('');
    const loadedRef = useRef(false);
    useEffect(() => {
        let handleContentLoad;
        if (!loadedRef.current) {
            loadedRef.current = true;
            console.log("UseEffect : Landing Page")
            handleContentLoad = () => {
                gsap.to('.full-navbar', {
                    position: 'relative',
                    zIndex: '30',
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.full-navbar',
                        start: 'top 40%',
                        end: 'top',
                        
                        // markers: true,
                        onEnter: () => {
                            console.log("Navbar entered")
                            gsap.to('.full-navbar', {
                                position: 'fixed',
                                opacity: 1,
                                duration: 1,
                            });
                        },
                        onLeaveBack: () => {
                            console.log("Navbar left")
                            gsap.to('.full-navbar', {
                                opacity: 0,
                                
                                duration: 0.5,
                            });
                        },
                    },
                });
                gsap.to('.sectionHome', {
                    scrollTrigger: {
                        trigger: '.sectionHome',
                        start: '20% 50%',
                        end: '20% 20%',
                        onEnter: () => {
                            setScrolledIntoView('home');
                            gsap.to('.home-container', {
                                opacity: 1,
                                duration: 0.5,
                            })
                        },
                        onLeaveBack: () => {
                            setScrolledIntoView('');
                        },
                    }
                })
                gsap.to('.sectionAbout', {
                    scrollTrigger: {
                        trigger: '.sectionAbout',
                        start: '10% 50%',
                        end: '10% 20%',
                        onEnter: () => {
                            setScrolledIntoView('about');
                            gsap.to('.about-container', {
                                opacity: 1,
                                duration: 0.5,
                            })
                        },
                        onLeaveBack: () => {
                            setScrolledIntoView('home');
                        },
                    }
                })
                gsap.to('.sectionProduct', {
                    scrollTrigger: {
                        trigger: '.sectionProduct',
                        start: '20% 50%',
                        end: '20% 20%',
                        onEnter: () => {
                            setScrolledIntoView('product');
                            gsap.to('.product-container', {
                                opacity: 1,
                                duration: 0.5,
                            })
                        },
                        onLeaveBack: () => {
                            setScrolledIntoView('about');
                        }
                    }
                })
                gsap.to('.sectionBook', {
                    scrollTrigger: {
                        trigger: '.sectionBook',
                        start: '20% 50%',
                        end: '20% 20%',
                        onEnter: () => {
                            setScrolledIntoView('book');
                            gsap.to('.book-container', {
                                opacity: 1,
                                duration: 0.5,
                            })
                        },
                        onLeaveBack: () => {
                            setScrolledIntoView('product');
                        }
                    }
                })
                gsap.to('.sectionContactUs', {
                    scrollTrigger: {
                        trigger: '.sectionContactUs',
                        start: '20% 50%',
                        end: '20% 20%',
                        onEnter: () => {
                            setScrolledIntoView('contact');
                            gsap.to('.contact-us-container', {
                                opacity: 1,
                                duration: 0.5,
                            })
                        },
                        onLeaveBack: () => {
                            setScrolledIntoView('book');
                        }
                    }
                })
            }

            if (document.readyState === 'complete') {
                console.log("Landing Page loaded complete");
                handleContentLoad();
            } else {
                window.addEventListener('load', function () {
                    console.log("Landing Page loaded load");
                    handleContentLoad();
                });
            }
        }

        return () => {
            window.removeEventListener('load', handleContentLoad);
        };
    }, []);

    return (
        <Box className='landing-page-container' sx={{ backgroundColor: `${theme.palette.secondary.main}` }} >
            <Banner />
            <Box className='content' sx={contentStyles}>
                <Navbar scrolledIntoView={scrolledIntoView} />
                <Grid container sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                        <Box className='sections-contianier'>
                            <Home />
                            <About />
                            <Product />
                            <Book />
                            <ContactUS />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={6}></Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default LandingPage