import { Tab, Tabs, Toolbar, Grid, Box } from '@mui/material'
import React, { useState } from 'react'
import { Filter } from '../functions/filter';


export function Order({ setCart }) {
    const [value, setvalue] = useState(0);
    const hashes = [ 'Breakfast', 'Lunch', 'Dinner' ]

    const tabStyle = {
        default_tab:{
            backgroundColor: '#4CED3E',
            color: 'white'
        },
        active_tab:{
            boxShadow: '0 3px 10px -3px lightblue',
            backgroundColor: 'white',
            color: '#4CED3E'
        }
    }

    const getStyle = (active) => {
        return active ? tabStyle.active_tab : tabStyle.default_tab
    }

    return (
        <Box>
            <Toolbar sx={{ marginRight: { xs: 1.6, xl: 2.4 }, marginTop: 15, display: 'flex', justifyContent: 'center', color: 'white' }}>
                <Tabs
                    textColor='inherit' 
                    value={value} 
                    onChange={(e, value)=> setvalue(value)} 
                    indicatorColor="white"
                >
                    {
                        hashes.map((tab, index) => (
                            <Tab style={ getStyle(value === index) } sx={{ marginLeft: { xs: 1, xl: 3 }, fontWeight: 800, borderRadius: 25 }} key={index} label={tab} />
                        ))
                    }
                </Tabs>
            </Toolbar>

            <Grid sx={{ marginTop: 3, marginLeft: '50%', transform: 'translate(-50%, 0%)', scrollBehavior: 'smooth', width: { xs: '85vw', sm: '64vw', md: '41vw', lg: '31vw', xl: '28vw' }, height: '64vh', overflow: 'auto', background: 'rgba(255,255,255,0.55)' }}>
                <Box sx={{ marginLeft: 1, padding: '23px 0px' }}>
                    <Filter setCart={ setCart } category={ hashes[value] } />
                </Box>
            </Grid>
        </Box>
    )
}
