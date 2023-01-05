/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { CartCard } from '../Components/cartCard'
import cartMT from '../images/cartMT.png'
import { cart, updateCart } from '../App'
import { Link } from 'react-router-dom'


export function Cart({ setCart }) {
    

    return (
        <>
            {
                localStorage.getItem('TOTAL_PRICE') > 0 ? (
    
                    <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0px 4vw',  marginLeft: '50%', transform: 'translate(-50%, 351%)', width: { xs: '85vw', sm: '64vw', md: '41vw', lg: '31vw', xl: '28vw' }, height: '5vh', overflow: 'hidden', background: 'white' }}>
                        <Typography fontWeight={600}>Total:&nbsp;&#8377;&nbsp;{ localStorage.getItem('TOTAL_PRICE') }</Typography>
                        <Button sx={{ marginLeft: '86%', padding: '0px 10px' }} onClick={ () => updateCart([], setCart) }>clear</Button>
                    </Grid>
                ) : (
                    <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0px 17.5px',  marginLeft: '50%', transform: 'translate(-50%, 351%)', width: { xs: '85vw', sm: '64vw', md: '41vw', lg: '31vw', xl: '28vw' }, height: '5vh', overflow: 'hidden', background: 'white' }}>
                        <Button sx={{ marginLeft: '86%', padding: '0px 10px' }} onClick={ () => updateCart([], setCart) }>clear</Button>
                    </Grid>
                )
            }


            <Grid sx={{ padding: '10px 10px', marginTop: '16vh', marginLeft: '50%', transform: 'translate(-50%, 3%)', scrollBehavior: 'smooth', width: { xs: '85vw', sm: '64vw', md: '41vw', lg: '31vw', xl: '28vw' }, height: '53vh', overflow: 'auto', background: 'rgba(255,255,255,0.55)' }}>
                    {
                        cart.length === 0 ? (
                            <Grid sx={{ mx: { xs: 3, xl: 15 } }} textAlign='center'>
                                <img style={{ width: '100%' }} src={cartMT} alt='No Items Found' />
                                <Typography sx={{ mt:  4, fontSize: { xs: 27, xl: 36 }, fontWeight: 700 }} color='#303360'>No Items Found</Typography>
                            </Grid>
                        ) : (
                            <Grid container spacing={2} justifyContent='center'>
                                {
                                    cart.map((item) => {
                                        return (
                                            <Grid item key={item.id}>
                                                <CartCard item = { item } setCart = { setCart } />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        )
                    }
            </Grid>

            <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: { xs: '0px 3vw', xl: '0px 1.5vw' },  marginLeft: '50%', transform: 'translate(-50%, 0%)', scrollBehavior: 'smooth', width: { xs: '85vw', sm: '64vw', md: '41vw', lg: '31vw', xl: '28vw' }, height: '12vh', overflow: 'auto', background: 'white' }}>
                <Button to='/order-now' component={NavLink} sx={{ fontSize: { xs: 11, xl: 14 }, fontWeight:{ xs: 600, xl: 700 }, "&:hover, &.active": { backgroundColor: 'orange', boxShadow: '0 3px 10px -3px orange' }, padding: { xs: '10px 15px', xl: '12.5px 15px' }, backgroundColor: 'orange', borderRadius: 25, color: 'white' }}>
                    continue adding
                </Button>

                <Button to='/payment' component={ Link } sx={{ "&:hover, &.active": { backgroundColor: 'orange', boxShadow: '0 3px 10px -3px orange' }, alignItems: 'center', padding:{ xs: '0.88px 15px', xl: '6px 15px' }, backgroundColor: 'orange', borderRadius: 25, color: 'white' }}>
                    <Typography sx={{ fontSize: { xs: 11, xl: 14 }, fontWeight:{ xs: 600, xl: 700 } }}>place order</Typography>
                    <Typography fontSize={25}>&nbsp;&#10230;</Typography>
                </Button>
            </Grid>
        </>
    )
}
