/* eslint-disable react-hooks/exhaustive-deps */
// import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import { AppBar, Toolbar, Typography, useTheme, useMediaQuery, Button, Box } from '@mui/material'
import React from 'react'
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';

export function NavBar({ notifyCount }) {
    // const [value, setvalue] = useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    // const tabStyle = {
    //     default_tab:{
    //         fontSize: '20px',
    //         fontWeight: 600,
    //         color: 'inherit'
    //     },
    //     active_tab:{
    //         fontSize: '20px',
    //         fontWeight: 600,
    //         color: '#4CED3E'
    //     }
    // }

    // const getStyle = (active) => {
    //     return active ? tabStyle.active_tab : tabStyle.default_tab
    // }

    return (
        <React.Fragment>
            <AppBar elevation={0} sx={{ zIndex: -1, backgroundColor: 'transparent', marginTop: 3 }}>
                <Toolbar>
                    <>
                        { matches && <HamburgerMenu /> }

                        {/* <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography sx={{ marginLeft: '3vw', "&:hover": { color: 'orange' } }} fontSize='21px'>&#8426;&ensp;&nbsp;back</Typography>
                        </Link> */}

                        {/* <Tabs
                            sx={{ marginLeft: '30px' }} 
                            textColor='inherit' 
                            value={value}
                            onChange={(e, value)=> setvalue(value)}
                            // indicatorColor="white"
                            TabIndicatorProps={{ style: { height: 4, backgroundColor: '#4CED3E' } }}
                        >

                            <Tab style={ getStyle(value === 0) } to='/#home' smooth component={HashLink} label='home' />
                            <Tab style={ getStyle(value === 1) } to='/#about-us' smooth component={HashLink} label='about us' />
                            <Tab style={ getStyle(value === 2) } to='/#contact' smooth component={HashLink} label='contact' />
                            <Tab style={ getStyle(value === 3) } to='/order-now' component={HashLink} label='order now' />
                        </Tabs> */}
    
                        <Button to='/cart' component={Link} sx={{ zIndex: 1, "&:hover, &.active": { boxShadow: '0 3px 10px -3px lightblue', backgroundColor: 'white', color: '#4CED3E' }, background: '#4CED3E', color: 'white', fontWeight: 700, marginLeft: 'auto' }} >
                            {
                                (notifyCount > 0) &&
                                    <Box>
                                        <Typography sx={{ top: 2, fontSize: 10, fontWeight: 700, display:'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 1.7, width: 15, height: 15, position: 'absolute', backgroundColor: 'red', color: 'white', borderRadius: 50 }}>
                                            { notifyCount }
                                        </Typography>
                                    </Box>
                            }
                            <ShoppingCartCheckoutSharpIcon />
                            &nbsp;
                            cart
                        </Button>
                        {/* <Button to='/sign-up' component={Link} sx={{ marginLeft: '10px' }} variant='contained'>Sign Up{" "}</Button> */}
                    </>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
