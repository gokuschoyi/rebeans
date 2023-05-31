import React, { useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
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
    useEffect(() => {
        const handleContentLoad = () => {
            gsap.to('.full-navbar', {
                position: 'relative',
                zIndex: 'auto',
                duration: 0.3,
                scrollTrigger: {
                    trigger: '.full-navbar',
                    start: 'top top',
                    end: '2 * innerHeight',
                    onEnter: () => {
                        gsap.to('.full-navbar', {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            zIndex: 30,
                            duration: 0.5,
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to('.full-navbar', {
                            position: 'relative',
                            zIndex: 'auto',
                            duration: 0.3,
                        });
                    },
                },
            });
            gsap.to('.sectionHome', {
                scrollTrigger: {
                    trigger: '.sectionHome',
                    start: 'top 40%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        console.log('Home entered');
                        setScrolledIntoView('home');
                    },
                    onLeaveBack: () => {
                        console.log('Home left');
                        setScrolledIntoView('');
                    }
                }
            })
            gsap.to('.sectionAbout', {
                scrollTrigger: {
                    trigger: '.sectionAbout',
                    start: 'top 40%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        console.log('About entered');
                        setScrolledIntoView('about');
                    },
                    onLeaveBack: () => {
                        console.log('About left');
                        setScrolledIntoView('home');
                    }
                }
            })
            gsap.to('.sectionProduct', {
                scrollTrigger: {
                    trigger: '.sectionProduct',
                    start: 'top 40%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        console.log('Product entered');
                        setScrolledIntoView('product');
                    },
                    onLeaveBack: () => {
                        console.log('Product left');
                        setScrolledIntoView('about');
                    }
                }
            })
            gsap.to('.sectionBook', {
                scrollTrigger: {
                    trigger: '.sectionBook',
                    start: 'top 40%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        console.log('Book entered');
                        setScrolledIntoView('book');
                    },
                    onLeaveBack: () => {
                        console.log('Book left');
                        setScrolledIntoView('product');
                    }
                }
            })
            gsap.to('.sectionContactUs', {
                scrollTrigger: {
                    trigger: '.sectionContactUs',
                    start: 'top 40%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        console.log('ContactUs entered');
                        setScrolledIntoView('contact');
                    },
                    onLeaveBack: () => {
                        console.log('ContactUs left');
                        setScrolledIntoView('book');
                    }
                }
            })
        }

        window.addEventListener('load', handleContentLoad);

        return () => {
            window.removeEventListener('load', handleContentLoad);
        };
    }, []);

    return (
        <Box className='landing-page-container' sx={{ backgroundColor: `${theme.palette.primary.main}` }} >
            <Banner />
            <Box className='content' sx={contentStyles}>
                <Navbar scrolledIntoView={scrolledIntoView} />
                <Box className='sections-contianier'>
                    <Home />
                    <About />
                    <Product />
                    <Book />
                    <ContactUS />
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage