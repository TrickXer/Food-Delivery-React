/* eslint-disable array-callback-return */
import { Grid } from '@mui/material'
import React from 'react'
import { ItemCards } from '../Components/itemCards'
import { cart } from '../App';
import { items } from '../db/menuList';

export function Filter({ category, setCart }) {

    let datas = items.reduce((cartItem, item) => {
        let index = cart.findIndex(element => element.id === item.id)
        
        if (index !== -1) {
            item.quantity = cart[index].quantity
        } else {
            item.quantity = 0
        }

        cartItem.push(item)
        return cartItem
    }, [])

    return (
        <>
            <Grid container spacing={2} justifyContent='center'>
                {
                    datas.map(item => {
                        if (item.category.includes(category)) {
                            return ( 
                                <Grid item key={item.id}>
                                    <ItemCards item = { item } setCart={ setCart } />
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </>
    )
}
