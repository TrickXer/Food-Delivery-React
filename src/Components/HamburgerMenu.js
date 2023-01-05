import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
    const [HamburgerMenu, setHamburgerMenu] = useState(false)

    const TABS = [["Home", "/"], ["About Us", "/about-us"], ["Contact", "/contact"], ["Order Now", "/order-now"], ["Log In", "/log-in"], ["Sign Up", "/sign-up"]]

    return (
        <React.Fragment>
            <Drawer PaperProps={{ sx: { width: 240 } }} open={HamburgerMenu} onClick={()=> setHamburgerMenu(false)} onClose={()=> setHamburgerMenu(false)}>
                <List>
                    {
                        TABS.map((page, index) => (
                            <ListItemButton component={ Link } to={page[1]} key={index}>
                                <ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '65px' }}>{page[0]}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{ fontSize: "large", color: "white" }} onClick={()=> setHamburgerMenu(!HamburgerMenu)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}
