import React, { useEffect, useState } from 'react'
import './Navbar.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography, useTheme } from '@mui/material'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = (props) => {
    const { scrolledIntoView } = props
    // console.log(scrolledIntoView)
    const [value, setValue] = useState('home');

    const handleChange = (event) => {
        const dataId = event.currentTarget.getAttribute('data-id');
        console.log(dataId)
        setValue(dataId);
    };

    const theme = useTheme()
    const colors = theme.palette
    // const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        setValue(scrolledIntoView)
    }, [scrolledIntoView])

    useEffect(() => {
        if (!lg) {
            setHamburgerClicked(false)
        }
    }, [lg])

    const [hamburgerClicked, setHamburgerClicked] = useState(false)
    const handleHamburgerClick = () => {
        setHamburgerClicked(!hamburgerClicked)
    }
    // console.log(hamburgerClicked)

    return (
        <Box display='flex' flexDirection='column' className='full-navbar'>
            <Box className='nav-bar' sx={{ backgroundColor: `${colors.secondary.main}` }}>
                <Box className='navbar-title'>
                    <Typography variant='h3' color='white'>Fernglade</Typography>
                </Box>
                <MenuOutlinedIcon
                    onClick={handleHamburgerClick}
                    sx={{ width: '40px', height: '40px' }}
                    className={lg ? 'fade-in-top hamburger' : 'fade-out-top hamburger'}
                />

                <Box className={lg ? 'fade-out-top navbar-component' : 'fade-in-top navbar-component'} >
                    <Box className='link-holder'>
                        <a href='#home' className={value === 'home' ? 'nav-links nav-links-selected' : 'nav-links'} data-id='home' onClick={handleChange}>
                            <span className='nav-span-with-icon'>
                                HOME
                                <CottageOutlinedIcon />
                            </span>
                        </a>

                        <a href='#about' className={value === 'about' ? 'nav-links nav-links-selected' : 'nav-links'} data-id='about' onClick={handleChange}>
                            <span className='nav-span-with-icon'>
                                ABOUT US
                                <InfoOutlinedIcon />
                            </span>
                        </a>

                        <a href='#product' className={value === 'product' ? 'nav-links nav-links-selected' : 'nav-links'} data-id='product' onClick={handleChange}>
                            <span className='nav-span-with-icon'>
                                PRODUCTS
                                <CategoryOutlinedIcon />
                            </span>
                        </a>

                        <a href='#book' className={value === 'book' ? 'nav-links nav-links-selected' : 'nav-links'} data-id='book' onClick={handleChange}>
                            <span className='nav-span-with-icon'>
                                BOOK
                                <CalendarMonthOutlinedIcon />
                            </span>
                        </a>

                        <a href='#contact' className={value === 'contact' ? 'nav-links nav-links-selected' : 'nav-links'} data-id='contact' onClick={handleChange}>
                            <span className='nav-span-with-icon'>
                                CONTACT US
                                <PhoneCallbackOutlinedIcon />
                            </span>
                        </a>

                        <a href='#cart' className={value === 'cart' ? 'nav-links nav-links-selected' : 'nav-links'} data-id='cart' onClick={handleChange}>
                            <span className='nav-span-with-icon'>
                                CART
                                <ShoppingCartOutlinedIcon />
                            </span>
                        </a>
                    </Box>
                </Box>
            </Box >

            <Box className={`smallnav-box ${!hamburgerClicked ? 'active' : ''}`}>
                <Box className='small-navbar' style={{ backgroundColor: `${theme.palette.secondary.main}` }}>
                    <a href='#home' className={value === 'home' ? 'nav-links-small nav-links-small-selected' : 'nav-links-small'}
                        data-id='home' onClick={handleChange}
                        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
                    >
                        <span className='nav-span-with-icon'>
                            HOME
                            <CottageOutlinedIcon />
                        </span>
                    </a>

                    <a href='#about' className={value === 'about' ? 'nav-links-small nav-links-small-selected' : 'nav-links-small'}
                        data-id='about' onClick={handleChange}
                        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
                    >
                        <span className='nav-span-with-icon'>
                            ABOUT US
                            <InfoOutlinedIcon />
                        </span>
                    </a>

                    <a href='#product' className={value === 'product' ? 'nav-links-small nav-links-small-selected' : 'nav-links-small'}
                        data-id='product' onClick={handleChange}
                        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
                    >
                        <span className='nav-span-with-icon'>
                            PRODUCTS
                            <CategoryOutlinedIcon />
                        </span>
                    </a>

                    <a href='#book' className={value === 'book' ? 'nav-links-small nav-links-small-selected' : 'nav-links-small'}
                        data-id='book' onClick={handleChange}
                        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
                    >
                        <span className='nav-span-with-icon'>
                            BOOK
                            <CalendarMonthOutlinedIcon />
                        </span>
                    </a>

                    <a href='#contact' className={value === 'contact' ? 'nav-links-small nav-links-small-selected' : 'nav-links-small'}
                        data-id='contact' onClick={handleChange}
                        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
                    >
                        <span className='nav-span-with-icon'>
                            CONTACT US
                            <PhoneCallbackOutlinedIcon />
                        </span>
                    </a>

                    <a href='#cart' className={value === 'cart' ? 'nav-links-small nav-links-small-selected' : 'nav-links-small'}
                        data-id='cart' onClick={handleChange}
                        style={{ backgroundColor: `${theme.palette.secondary.light}` }}
                    >
                        <span className='nav-span-with-icon'>
                            CART
                            <ShoppingCartOutlinedIcon />
                        </span>
                    </a>
                </Box>
            </Box>

        </Box >
    )
}

export default Navbar