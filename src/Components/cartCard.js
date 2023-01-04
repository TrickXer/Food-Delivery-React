import React, { useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Box, Button, Card, CardActions, CardHeader, useTheme, CardMedia, Typography, useMediaQuery } from '@mui/material'
import { cart, price } from '../App'
import image from '../images/background.jpg'

export function CartCard({ item, setCart }) {
    let [quantity, setQuantity] = useState(item.quantity)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.not('xs'));

    const update = (remove) => {
        for (const key in cart) {
            const element = cart[key]
            if (element.title === item.title) {
                if (quantity === 0 || remove ) {
                    cart.splice(key, 1)
                }
                element.quantity = quantity
            }
        }

        if (cart.length === 0) {
            setCart([])
        }
        
        localStorage.setItem('CART_DETAILS', JSON.stringify(cart))
        localStorage.setItem('TOTAL_PRICE', price(cart));
        setCart(JSON.parse(localStorage.getItem('CART_DETAILS')))
    }
    
    const operation = (operator) => {
        operator === '+' ? quantity += 1 : quantity -= 1
        setQuantity(quantity)
        update()
    }

    return (
        <>
            {
                quantity > 0 &&
                
                <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: { xs: '77vw', sm: '59vw', md: '37.5vw', lg: '28vw', xl:'26vw' }, padding: '10px 10px' }} elevation={6} >
                    
                    <Box width='100%' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ marginLeft: 0, width: '42%', display: 'flex', alignItems: 'center' }}>
                            <CardMedia sx={{ height: '7vh', width: { xs: '16vw', sm: '12.5vw', md: '8vw', lg: '6vw', xl: '5vw' } }} component='img' image={image} alt='image' />
                            
                            <CardHeader 
                                titleTypographyProps = {{ fontSize: { xs: 17, xl: 21 }, fontWeight: 545 }}
                                title = {item.title}
                            />
                        </Box>
                        
                        { matches && <Typography sx={{ fontSize: 18 }} padding='0px 15px'>&#8377;{ item.price }</Typography> }
                            
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <CardActions>
                                <Box sx={{ color: 'orange', display: 'flex', justifyContent: 'center', aligncart: 'center', width: 64, backgroundColor: 'rgba(255, 165, 0, 0.18)', border: '2px solid orange', borderRadius: 25 }}>
                                    <Typography onClick={() => operation('+')} sx={{ cursor: 'pointer' }} fontWeight={600}>+</Typography>
                                    <Typography marginLeft={1} fontWeight={600}>{ quantity }</Typography>
                                    <Typography onClick={() => operation('-')} sx={{ cursor: 'pointer' }} marginLeft={1} fontSize={18} fontWeight={600}>-</Typography>
                                </Box>
                            </CardActions>

                            <CardActions>
                                <Button sx={{ color: 'red' }} onClick={ () => update(true) }>
                                    <DeleteForeverOutlinedIcon />
                                </Button>
                            </CardActions>
                        </Box>
                    </Box>
                </Card>
            }
        </>
    )
}
