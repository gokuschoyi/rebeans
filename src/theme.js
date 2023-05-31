import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#c04000',
            light: '#cc6633',
            dark: '#862c00',
        },
        secondary: {
            main: '#556b2f',
            light: '#778858',
            dark: '#3b4a20',
        },
        text: {
            primary: '#f8f9fa',
            secondary: '#252525',
            disabled: '#161616',
        },
        background: {
            default: '#f8f9fa',
            paper: '#f0f1f5',
        },
        error: {
            main: '#dc3545',
            light: '#e35d6a',
            dark: '#9a2530',
        },
        warning: {
            main: '#ffc107',
            light: '#ffcd38',
            dark: '#b28704',
        },
        info: {
            main: '#17a2b8',
            light: '#45b4c6',
            dark: '#107180',
        },
        success: {
            main: '#28a745',
            light: '#53b86a',
            dark: '#1c7430',
        },
        divider: '#ced4da',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    typography: {
        fontFamily: [`'Montserrat', sans-serif`]
    }
});

export default theme;