import React from 'react'
import './Product.css'
import { Box, Typography, Button, Divider } from '@mui/material'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import P1 from '../../assets/pics/p1.jpg'
import P2 from '../../assets/pics/p2.jpg'
import P3 from '../../assets/pics/p3.jpg'
import P4 from '../../assets/pics/p4.jpg'
import P5 from '../../assets/pics/p5.jpg'
import P6 from '../../assets/pics/p6.jpg'

const Landing = () => {
    const ImageHolder = ({ image }) => {
        return (
            <Box className='image-holder-product'>
                <img loading='lazy' src={image} alt='about'></img>
            </Box>
        )
    }

    return (
        <section className='sectionProduct' id='product' style={{ backdropFilter: 'blur(2px)' }}>
            <Box className='product-container'>
                <Box className='about-content'>
                    <Box display='flex' justifyContent='flex-start' flexDirection='column' width='100%'>
                        <Typography textAlign='flex-start' display='flex' variant='h4' >COFFEE BY</Typography>
                        <Typography textAlign='flex-start' display='flex' variant='h1'>Rebeans</Typography>
                        <Typography textAlign='flex-start' display='flex' variant='h5' >For Those Who Love The Best</Typography>

                        <Box className='product-box'>
                            <Swiper
                                className="mySwiper-product"
                                direction='horizontal'
                                centeredSlides={true}
                                modules={[Autoplay, Pagination]}
                                slidesPerView={3}
                                /* autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }} */
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                loop={true}
                                navigation={true}
                            >
                                <SwiperSlide key={1}>
                                    <ImageHolder image={P1} />
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <ImageHolder image={P2} />
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <ImageHolder image={P3} />
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <ImageHolder image={P4} />
                                </SwiperSlide>
                                <SwiperSlide key={5}>
                                    <ImageHolder image={P5} />
                                </SwiperSlide>
                                <SwiperSlide key={6}>
                                    <ImageHolder image={P6} />
                                </SwiperSlide>
                            </Swiper>
                        </Box>

                        <Box pt={6}>
                            <Button variant='contained' className='btn btn-white'>EXPLORE OUR PRODUCTS</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Divider width='90%'></Divider>
            </Box>
        </section>
    )
}

export default Landing