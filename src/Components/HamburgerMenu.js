import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function HamburgerMenu() {
    const [HamburgerMenu, setHamburgerMenu] = useState(false)

    const TABS = ["Home", "About Us", "Contact", "Order Now", "Log In", "Sign Up"]

    return (
        <React.Fragment>
            <Drawer PaperProps={{ sx: { width: 240 } }} open={HamburgerMenu} onClick={()=> setHamburgerMenu(false)} onClose={()=> setHamburgerMenu(false)}>
                <List>
                    {
                        TABS.map((page, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '65px' }}>{page}</ListItemText>
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
