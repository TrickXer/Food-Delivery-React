/* eslint-disable array-callback-return */
import { Button, Card, CardActions, CardHeader, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { Box } from '@mui/system'
import { cart, price } from '../App'
import image from '../images/background.jpg'


export function ItemCards({ item, setCart }) {
    let [count, setCount] = useState(item.quantity ? item.quantity : 0)

    localStorage.setItem('CART_DETAILS', JSON.stringify(cart))
    localStorage.setItem('TOTAL_PRICE', price(cart));

    const update = () => {
        for (const key in cart) {
            const element = cart[key]
            if (element.title === item.title) {
                if (count === 0 ) cart.splice(key, 1)
                element.quantity = count
            }
        }

        localStorage.setItem('CART_DETAILS', JSON.stringify(cart))
        localStorage.setItem('TOTAL_PRICE', price(cart));
        setCart(JSON.parse(localStorage.getItem('CART_DETAILS')))
    }

    const addItem = () => {
        setCount(count = 1)
        cart.push({...item, quantity: count})

        localStorage.setItem('CART_DETAILS', JSON.stringify(cart))
        localStorage.setItem('TOTAL_PRICE', price(cart));
        setCart(JSON.parse(localStorage.getItem('CART_DETAILS')))
    }
    
    const operation = (operator) => {
        operator === '+' ? setCount(count += 1) : setCount(count -= 1)
        update()
    }

    return (
        <>
            <Card sx={{ display: 'flex', width: { xs: '77vw', sm: '59vw', md: '37.5vw', lg: '28vw', xl:'26vw' }, padding: '5px 10px' }} elevation={6}>
                <CardMedia sx={{ height: '15vh', width: { xs: '32vw', sm: '25vw', md: '16vw', lg: '12vw', xl: '10vw' }, alignItems: 'center' }} component='img' image={image} alt='image' />

                <Box width='100%'>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <CardHeader
                            titleTypographyProps = {{ fontSize: { xs: 20, xl: 24 } }}
                            title = {item.title}

                            subheaderTypographyProps = {{ fontSize: { xs: 12, xl: 15 }, color: 'darkgrey' }}
                            subheader = {item.category}
                        />
                        <Typography fontSize={18} padding='0px 15px'>&#8377;{ item.price }</Typography>
                    </Box>

                    <CardActions>
                        {
                            count === 0 ? (
                                <Button onClick={addItem} sx={{ "&:hover, &.active": { backgroundColor: 'rgba(255, 165, 0, 0.2)', color: 'orange', boxShadow: '0 3px 10px -3px orange' }, fontSize: 11, backgroundColor: 'orange', borderRadius: 25, fontWeight: 600, color: 'white' }}>Add</Button>
                            ) : (
                                <>
                                    <Box sx={{ color: 'orange', display: 'flex', justifyContent: 'center', aligncart: 'center', width: 64, backgroundColor: 'rgba(255, 165, 0, 0.18)', border: '2px solid orange', borderRadius: 25 }}>
                                        <Typography onClick={() => operation('+')} sx={{ cursor: 'pointer' }} fontWeight={600}>+</Typography>
                                        <Typography marginLeft={1} fontWeight={600}>{ count }</Typography>
                                        <Typography onClick={() => operation('-')} sx={{ cursor: 'pointer' }} marginLeft={1} fontSize={18} fontWeight={600}>-</Typography>
                                    </Box>
                                </>
                            )
                        }
                    </CardActions>
                </Box>
            </Card>
        </>
    )
}
