import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
const pages = ["My Notes", 'Find Routine',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const TopBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(true);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };
    const Logo = () => {
        return (
            <NavLink to='/' className='flex items-center'>
                <AdbIcon sx={{ mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        // display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
            </NavLink>
        )
    }

    return (
        <div className='mb-32'>
            <AppBar position="fixed" sx={{ background: 'white', color: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Logo></Logo>
                        <Box className='justify-center' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div className='flex'>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={'/' + page}
                                        sx={{ my: 2, color: 'Black', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className='justify-end'>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Drawer
                            anchor='left'
                            open={anchorElNav}
                            onClose={handleCloseNavMenu}
                            sx={{ width: '50%' }}
                        >
                            <div className='w-[50vw] px-4 py-3'>
                                <Logo></Logo>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={'/' + page}
                                        sx={{ my: 2, color: 'Black', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default TopBar;