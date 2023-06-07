import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar
} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navList = [
    {
        path: '/',
        label: 'World WIP'
    },
    {
        path: '/about',
        label: 'About'
    }
];

const Sidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <Drawer
            variant='permanent'
            anchor='left'
            sx={{
                '& .MuiDrawer-paper': {
                    width: 200,
                    boxSizing: 'border-box'
                }
            }}
        >
            <Toolbar sx={{ justifyContent: 'center' }}>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt='logo' />
            </Toolbar>
            <Divider />
            <List sx={{ padding: 0 }}>
                {navList.map((e, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            selected={pathname === e.path}
                            onClick={() => navigate(e.path)}
                        >
                            <ListItemText primary={e.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
