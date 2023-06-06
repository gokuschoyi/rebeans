import React from 'react'
import './About.css'
import { Box, Typography, Grid, Divider } from '@mui/material'

import {
    PicOne,
    PicTwo,
    PicThree,
    PicFour,
    PicFive,
    PicSix,
    PicSeven,
    PicEight,
    SecOne,
    SecTwo,
    SecThree,
    SecFour,
    SecFive,
    SecSix
}
    from './Images'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const About = () => {
    const ImageHolder = ({ image }) => {
        return (
            <Box className='image-holder'>
                <img style={{ height: '350px' }} loading='lazy' src={image} alt='about'></img>
            </Box>
        )
    }
    return (
        <section className='sectionAbout' id='about'>
            <Box className='about-container'>
                <Box className='about-content'>
                    <Box display='flex' justifyContent='flex-start'>
                        <Typography variant='h1' textAlign='start' p={2}>About</Typography>
                    </Box>
                    <Grid container className='about-box-one' spacing={{ xs: 2, sm: 2 }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={8} className='about-box-one-left center-col'>
                            <Box pl={2} pr={2} display='flex' flexDirection='column' gap={2} >
                                <Typography variant='body1' textAlign='justify'>
                                    Welcome to Fernglade Estate, nestled in the mountains of Makkimala in Wayanad. Experience the captivating ambiance of this serene destination, where lush green hills and tea and spice plantations enchant your senses. The crisp mountain air carries a hint of mist, inviting you to escape the bustling city life and immerse yourself in the peaceful surroundings.
                                </Typography>
                                <Typography variant='body1' textAlign='justify'>
                                    Throughout the year, Fernglade Estate enjoys a mild and pleasant climate. Summers offer a cool respite with temperatures ranging from 20°C to 35°C (68°F to 95°F), while refreshing monsoon showers transform the hills into a verdant paradise. In winter, temperatures range from 10°C to 25°C (50°F to 77°F), creating an ideal setting to explore the outdoors.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4} className='about-box-one-right center-col'>
                            <Swiper
                                className="mySwiper-one"
                                direction='horizontal'
                                centeredSlides={true}
                                modules={[Autoplay, Pagination, Navigation]}
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
                                    <ImageHolder image={PicOne} />
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <ImageHolder image={PicTwo} />
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <ImageHolder image={PicThree} />
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <ImageHolder image={PicFour} />
                                </SwiperSlide>
                                <SwiperSlide key={5}>
                                    <ImageHolder image={PicFive} />
                                </SwiperSlide>
                                <SwiperSlide key={6}>
                                    <ImageHolder image={PicSix} />
                                </SwiperSlide>
                                <SwiperSlide key={7}>
                                    <ImageHolder image={PicSeven} />
                                </SwiperSlide>
                                <SwiperSlide key={8}>
                                    <ImageHolder image={PicEight} />
                                </SwiperSlide>
                            </Swiper>
                        </Grid>
                    </Grid>

                    <Grid container className='about-box-two' spacing={{ sm: 2 }}>
                        <Grid item xs={12} sm={12} md={6} lg={5} xl={4} className='about-box-two-right center-col'>
                            <Swiper
                                className="mySwiper-two"
                                direction='horizontal'
                                centeredSlides={true}
                                modules={[Autoplay, Pagination, Navigation]}
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
                                    <ImageHolder image={SecOne} />
                                </SwiperSlide>
                                <SwiperSlide key={2}>
                                    <ImageHolder image={SecTwo} />
                                </SwiperSlide>
                                <SwiperSlide key={3}>
                                    <ImageHolder image={SecThree} />
                                </SwiperSlide>
                                <SwiperSlide key={4}>
                                    <ImageHolder image={SecFour} />
                                </SwiperSlide>
                                <SwiperSlide key={5}>
                                    <ImageHolder image={SecFive} />
                                </SwiperSlide>
                                <SwiperSlide key={6}>
                                    <ImageHolder image={SecSix} />
                                </SwiperSlide>
                            </Swiper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={7} xl={8} className='about-box-two-left center-col'>
                            <Typography variant='body1' textAlign='justify' p={2}>
                                Nature enthusiasts will be captivated by the abundant biodiversity of Wayanad. Explore dense forests, encounter exotic wildlife, and witness breathtaking sunrises and sunsets from scenic viewpoints. The region's cascading waterfalls, pristine rivers, and rolling hills provide a soothing backdrop that fills you with awe and wonder. At Fernglade Estate, our resort harmoniously blends with the natural surroundings. Experience the cozy and comfortable accommodations, designed to provide a serene and restful stay. Stroll through lush gardens, connecting with the vibrant flora and fauna that flourish here.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant='body1' textAlign='justify' p={2}>
                        Surrounding the estate, a wealth of attractions awaits. Discover ancient caves, visit historic temples, and embark on wildlife safaris in nearby national parks. Engage in thrilling adventures like bamboo rafting, zip-lining, and trekking, immersing yourself in the exhilarating beauty of the landscape. Delight in authentic local cuisine, rich in flavors and spices, tantalizing your taste buds with the unique culinary delights of Wayanad.
                    </Typography>
                    <Typography variant='body1' textAlign='justify' p={2}>
                        Fernglade Estate offers an unforgettable experience, where tranquility, nature, and warm hospitality merge to create an enchanting getaway. Allow yourself to be captivated by the serene atmosphere, the abundance of natural beauty, and the opportunity to reconnect with yourself amidst the mountains of Wayanad.
                    </Typography>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Divider width='90%'></Divider>
            </Box>

        </section>
    )
}

export default About